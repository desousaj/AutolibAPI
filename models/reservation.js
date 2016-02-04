"use strict";

module.exports = function(sequelize, DataTypes) {
    var Reservation = sequelize.define("Reservation", {
        vehicule: {type:DataTypes.INTEGER, primaryKey: true },
        //client: DataTypes.INTEGER,
        date_reservation: DataTypes.DATE,
        date_echeance: DataTypes.DATE
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'reservation',
        classMethods: {
            associate: function(models) {
                Reservation.belongsTo(models.Client, {foreignKey : 'client'})
            }
        }
    });

    return Reservation;
};