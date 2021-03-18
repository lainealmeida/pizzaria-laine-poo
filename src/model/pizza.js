let {Sequelize, DataTypes} = require("sequelize");
let db = require("../db");

const pizza = db.define("pizza",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        sabor : {
            type: DataTypes.STRING,
            allowNull: false
        },
        tamanho: DataTypes.INTEGER
    }
);

module.exports = pizza;

