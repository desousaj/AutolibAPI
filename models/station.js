"use strict";

module.exports = function(sequelize, DataTypes) {
    var Station = sequelize.define("Station", {
            idStation: {
                type :  DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            latitude: DataTypes.DECIMAL(9,6),
            longitude: DataTypes.DECIMAL(9,6),
            adresse: DataTypes.STRING(200),
            numero: DataTypes.INTEGER,
            ville: DataTypes.STRING(100),
            code_postal: DataTypes.INTEGER
    }, {
            tableName: 'station'
            /*
            classMethods: {
            // ICI, on défnit les relations avec les autre models!!
             associate: function(models) {
             User.hasMany(models.Task)
             }
             }
             */
    });

    return Station;
};