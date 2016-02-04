"use strict";

module.exports = function(sequelize, DataTypes) {
    var Client = sequelize.define("Client", {
        idClient: {
            type :  DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nom: DataTypes.STRING(45),
        prenom: DataTypes.STRING(45),
        date_naissance: DataTypes.DATE,
    }, {
        timestamps: false,
        freezeTableName: true, // Model tableName will be the same as the model name
        tableName: 'client',
        classMethods: {
            associate: function(models) {
                Client.hasMany(models.Reservation, {foreignKey : 'client'})
            }
        }
    });

    return Client;
};
