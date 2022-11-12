const { UniqueConstraintError } = require('sequelize');
const Productos = require('../models/productos.model');

const querysProductos = {};

querysProductos.getAllProductos = async (req, res) => {
    const allProductos = await Productos.findAll();
    res.json(allProductos);
};

querysProductos.postProducto = async (req, res) => {
    const { nombre_producto,tipo_producto ,precio_producto, cantidad_producto } = req.body;
    try {
        await Productos.create({nombre_producto,tipo_producto, precio_producto, cantidad_producto});
        res.json({message: 'Producto agregado'});
    } catch (error) {
        if(error instanceof UniqueConstraintError){
            res.json({message: null});
        };
    };
};

querysProductos.getOneProducto = async (req, res) => {
    const id_producto = req.params;
    const oneProducto = await Productos.findOne({where: {id_producto: id_producto.id}});
    res.json(oneProducto);
};

querysProductos.putProducto = async (req, res) => {
    const { nombre_producto,tipo_producto, precio_producto, cantidad_producto } = req.body;
    const id_producto = req.params;

    try {
        await Productos.update({nombre_producto,tipo_producto, precio_producto, cantidad_producto}, {where: {id_producto: id_producto.id}});    
        res.json({message:"producto editado"});
    }catch (error){
        if(error instanceof UniqueConstraintError){
            res.json({message: null});
        };
    };
};

querysProductos.deleteProducto = async (req, res) => {
    const id_producto = req.params;
    await Productos.destroy({where: {id_producto: id_producto.id}});
    res.json({message: "producto eliminado"});
};


module.exports = querysProductos;