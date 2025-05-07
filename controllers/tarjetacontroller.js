const tarjetaModel = require('../models/tarjetamodel');

const crearTarjeta = (req, res) => {
    const tarjeta = req.body;
    tarjetaModel.crearTarjeta(tarjeta, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al crear la tarjeta', error: err });
        }
        res.status(201).json({ message: 'Tarjeta creada correctamente', data: result });
    });
};

const editarTarjeta = (req, res) => {
    const { id } = req.params;
    const datos = req.body;
    tarjetaModel.editarTarjeta(id, datos, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al editar la tarjeta', error: err });
        }
        res.status(200).json({ message: 'Tarjeta editada correctamente', data: result });
    });
};

const eliminarTarjeta = (req, res) => {
    const { id } = req.params;
    tarjetaModel.eliminarTarjeta(id, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al eliminar la tarjeta', error: err });
        }
        res.status(200).json({ message: 'Tarjeta eliminada correctamente' });
    });
};

const obtenerTarjetas = (req, res) => {
    tarjetaModel.obtenerTarjetas((err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener las tarjetas', error: err });
        }
        res.status(200).json({ data: result });
    });
};

module.exports = {
    crearTarjeta,
    editarTarjeta,
    eliminarTarjeta,
    obtenerTarjetas
};
