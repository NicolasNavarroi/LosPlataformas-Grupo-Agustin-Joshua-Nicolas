const db = require('../config/bd');

const verificarCredenciales = (email, clave, callback) => {
    const sql = 'SELECT * FROM Usuario WHERE Email = ? AND Clave = ?';
    db.query(sql, [email, clave], callback);
};

const obtenerTipoUsuario = (idUsuario, callback) => {
    const sql = 'SELECT id_tipo_usuario FROM Usuario WHERE idUsuario = ?';
    db.query(sql, [idUsuario], callback);
};

module.exports = {
    verificarCredenciales,
    obtenerTipoUsuario
};
