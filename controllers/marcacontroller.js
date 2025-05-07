const marcaModel = require('../models/marcamodel');

const crearMarca = (req, res) => {
    const marca = req.body;
    marcaModel.crearMarca(marca, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al crear la marca', error: err });
        }
        res.status(201).json({ message: 'Marca creada correctamente', data: result });
    });
};

const editarMarca = (req, res) => {
    const { id } = req.params;
    const datos = req.body;
    marcaModel.editarMarca(id, datos, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al editar la marca', error: err });
        }
        res.status(200).json({ message: 'Marca editada correctamente', data: result });
    });
};

const eliminarMarca = (req, res) => {
    const { id } = req.params;
    marcaModel.eliminarMarca(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al eliminar la marca', error: err });
        }
        res.status(200).json({ message: 'Marca eliminada correctamente' });
    });
};

const obtenerMarcas = (req, res) => {
    marcaModel.obtenerMarcas((err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener las marcas', error: err });
        }
        res.status(200).json({ data: result });
    });
};

module.exports = {
    crearMarca,
    editarMarca,
    eliminarMarca,
    obtenerMarcas
};
