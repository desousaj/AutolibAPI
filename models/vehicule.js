"use strict";

module.exports = function(sequelize, DataTypes) {
    var Vehicule = sequelize.define("Vehicule", {
        idVehicule: {
            type :  DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        RFID: DataTypes.INTEGER,
        etatBatterie: DataTypes.INTEGER,
        Disponibilite: DataTypes.STRING(45),
        latitude: DataTypes.DECIMAL(9,6),
        longitude: DataTypes.DECIMAL(9,6),
        // type_vehicule: DataTypes.INTEGER,
    }, {
        timestamps: false,
        freezeTableName: true, // Model tableName will be the same as the model name
        tableName: 'vehicule'
        /*
         classMethods: {
         // ICI, on défnit les relations avec les autre models!!
         associate: function(models) {
         User.hasMany(models.Task)
         }
         }
         */
    }),

    Type_vehicule = sequelize.define('Type_vehicule', {
        id: {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        categorie: DataTypes.STRING(45),
        type_vehicule: DataTypes.STRING(45),
    });

    Vehicule.belongsTo(Type_vehicule, {foreignKey: 'type_vehicule'});

    return Vehicule;
};
