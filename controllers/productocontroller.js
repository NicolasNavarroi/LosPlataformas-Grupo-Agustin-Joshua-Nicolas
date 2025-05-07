const productoModel = require('../models/productomodel');

const crearProducto = (req, res) => {
    const producto = req.body;
    productoModel.crearProducto(producto, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al crear el producto', error: err });
        }
        res.status(201).json({ message: 'Producto creado correctamente', data: result });
    });
};

const editarProducto = (req, res) => {
    const { id } = req.params;
    const datos = req.body;
    productoModel.editarProducto(id, datos, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al editar el producto', error: err });
        }
        res.status(200).json({ message: 'Producto editado correctamente', data: result });
    });
};

const eliminarProducto = (req, res) => {
    const { id } = req.params;
    productoModel.eliminarProducto(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al eliminar el producto', error: err });
        }
        res.status(200).json({ message: 'Producto eliminado correctamente' });
    });
};

const obtenerProductos = (req, res) => {
    productoModel.obtenerProductos((err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener los productos', error: err });
        }
        res.status(200).json({ data: result });
    });
};

module.exports = {
    crearProducto,
    editarProducto,
    eliminarProducto,
    obtenerProductos
};
