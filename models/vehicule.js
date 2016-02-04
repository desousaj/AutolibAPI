"use strict";

module.exports = function(sequelize, DataTypes) {
    var Vehicule = sequelize.define("Vehicule", {
        idVehicule: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        RFID: DataTypes.INTEGER,
        etatBatterie: DataTypes.INTEGER,
        Disponibilite: DataTypes.STRING(45),
        latitude: DataTypes.DECIMAL(9,6),
        longitude: DataTypes.DECIMAL(9,6)
    }, {
        timestamps: false,
        freezeTableName: true, // Model tableName will be the same as the model name
        tableName: 'vehicule',
        classMethods: {
           associate: function(models) {
            Vehicule.belongsTo(models.Type_vehicule, {foreignKey : 'type_vehicule', targetKey: 'idType_vehicule'}),
            Vehicule.hasOne(models.Borne, {foreignKey : 'idVehicule', targetKey: 'idVehicule'})
        }
    }
});

    return Vehicule;
};
