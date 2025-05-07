const express = require('express');
const router = express.Router();
const tarjetaController = require('../controllers/tarjetacontroller');

router.post('/', tarjetaController.crearTarjeta);
router.put('/:id', tarjetaController.editarTarjeta);
router.delete('/:id', tarjetaController.eliminarTarjeta);
router.get('/', tarjetaController.obtenerTarjetas);

module.exports = router;
