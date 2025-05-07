const express = require('express');
const router = express.Router();
const verificadorController = require('../controllers/verificadocontroller');

router.post('/login', verificadorController.loginUsuario);

module.exports = router;
