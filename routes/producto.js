const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productocontroller');

router.post('/', productoController.crearProducto);
router.put('/:id', productoController.editarProducto);
router.delete('/:id', productoController.eliminarProducto);
router.get('/', productoController.obtenerProductos);

module.exports = router;
