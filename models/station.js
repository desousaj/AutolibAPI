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
        timestamps: false,
        freezeTableName: true,
        tableName: 'station',
        classMethods: {
             associate: function(models) {
                Station.hasMany(models.Borne, {foreignKey : 'station'})
             }
        }

    });

    return Station;
};