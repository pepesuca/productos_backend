const { Model, DataTypes } = require('sequelize');
const sequelize  = require('../database/connection_db')

class Productos extends Model { }

Productos.init({
    id_producto: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    tipo_producto: {type: DataTypes.STRING, allowNull: false},
    nombre_producto: {type: DataTypes.STRING, allowNull: false, unique: true},
    precio_producto: {type: DataTypes.FLOAT, allowNull: false},
    cantidad_producto: {type: DataTypes.INTEGER, allowNull: false},
}, {sequelize, modelName: 'Productos'});

Productos.sync();

module.exports = Productos;