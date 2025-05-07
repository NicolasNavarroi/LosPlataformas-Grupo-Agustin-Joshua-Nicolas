const verificadorModelo = require('../models/verificadormodel');

const loginUsuario = (req, res) => {
    const { email, clave } = req.body;

    verificadorModelo.verificarCredenciales(email, clave, (err, resultados) => {
        if (err) return res.status(500).json({ error: 'Error en el servidor' });

        if (resultados.length === 0) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        const usuario = resultados[0];

        res.status(200).json({
            mensaje: 'Autenticación exitosa',
            idUsuario: usuario.idUsuario,
            tipoUsuario: usuario.id_tipo_usuario
        });
    });
};

module.exports = {
    loginUsuario
};
