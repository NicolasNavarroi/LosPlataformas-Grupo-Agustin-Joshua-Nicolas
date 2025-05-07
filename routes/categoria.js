const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriacontroller');

router.post('/', categoriaController.crearCategoria);
router.put('/:id', categoriaController.editarCategoria);
router.delete('/:id', categoriaController.eliminarCategoria);
router.get('/', categoriaController.obtenerCategorias);

module.exports = router;
