const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuariocontroller');

router.get('/:id', usuarioController.obtenerUsuarios);
router.post('/crear', usuarioController.crearUsuario);
router.put('/editar/:id', usuarioController.editarUsuario);
router.delete('/eliminar/:id', usuarioController.eliminarUsuario);

module.exports = router;
