"use strict";

module.exports = function(sequelize, DataTypes) {
    var Borne = sequelize.define("Borne", {
        idBorne: {
            type :  DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        etatBorne: DataTypes.BOOLEAN,
        //station: DataTypes.INTEGER,
        idVehicule: DataTypes.INTEGER
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'borne',
        classMethods: {
            associate: function(models) {
                Borne.belongsTo(models.Station, {foreignKey: 'station', targetKey: 'idStation'}),
                Borne.belongsTo(models.Vehicule, {foreignKey : 'idVehicule', targetKey: 'idVehicule'})
            }
        }

    });

    return Borne;
};