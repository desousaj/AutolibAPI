"use strict";

module.exports = function(sequelize, DataTypes) {
    var Type_vehicule = sequelize.define("Type_vehicule", {
        idType_vehicule: {
            type :  DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        categorie: DataTypes.STRING(45),
        type_vehicule: DataTypes.STRING(45)
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'type_vehicule',
        classMethods: {
            associate: function(models) {
                Type_vehicule.hasMany(models.Vehicule, {foreignKey: 'type_vehicule'})
            }
        }

    });

    return Type_vehicule;
};