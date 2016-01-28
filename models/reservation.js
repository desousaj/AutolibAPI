"use strict";

module.exports = function(sequelize, DataTypes) {
    var Reservation = sequelize.define("Reservation", {
        vehicule: DataTypes.INTEGER,
        client: DataTypes.INTEGER,
        date_reservation: DataTypes.DATE,
        date_echeance: DataTypes.DATE
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'reservation'
    });

    return Reservation;
};