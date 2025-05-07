const express = require('express');
const router = express.Router();
const marcaController = require('../controllers/marcacontroller');

router.post('/', marcaController.crearMarca);
router.put('/:id', marcaController.editarMarca);
router.delete('/:id', marcaController.eliminarMarca);
router.get('/', marcaController.obtenerMarcas);

module.exports = router;
