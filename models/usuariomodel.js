const db = require('../config/bd');

const obtenerUsuarios = (idUsuario, callback) => {
    const sql = 'SELECT * FROM Usuario WHERE idUsuario = ?';
    db.query(sql, [idUsuario], callback);
};


const crearUsuario = (usuario, callback) => {
    const sql = `INSERT INTO Usuario (Username, Nombre_apellido, Clave, Edad, Email, Direccion, Telefono, Fecha_registro, id_tipo_usuario)
                 VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), ?)`;
    const values = [
        usuario.Username,
        usuario.Nombre_apellido,
        usuario.Clave,
        usuario.Edad,
        usuario.Email,
        usuario.Direccion,
        usuario.Telefono,
        usuario.id_tipo_usuario
    ];
    db.query(sql, values, callback);
};

const editarUsuario = (id, datos, callback) => {
    const sql = `UPDATE Usuario SET Username = ?, Nombre_apellido = ?, Clave = ?, Edad = ?, Email = ?, Direccion = ?, Telefono = ?, id_tipo_usuario = ?
                 WHERE idUsuario = ?`;
    const values = [
        datos.Username,
        datos.Nombre_apellido,
        datos.Clave,
        datos.Edad,
        datos.Email,
        datos.Direccion,
        datos.Telefono,
        datos.id_tipo_usuario,
        id
    ];
    db.query(sql, values, callback);
};

const eliminarUsuario = (id, callback) => {
    const sql = 'DELETE FROM Usuario WHERE idUsuario = ?';
    db.query(sql, [id], callback);
};

module.exports = {
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
    obtenerUsuarios  
};
