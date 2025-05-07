const db = require('../config/bd');

const crearMarca = (marca, callback) => {
    const sql = 'INSERT INTO marca (nombre, descripcion, logo) VALUES (?, ?, ?)';
    const values = [
        marca.nombre,
        marca.descripcion,
        marca.logo
    ];
    db.query(sql, values, callback);
};

const editarMarca = (id, datos, callback) => {
    const sql = 'UPDATE marca SET nombre = ?, descripcion = ?, logo = ? WHERE id_marca = ?';
    const values = [
        datos.nombre,
        datos.descripcion,
        datos.logo,
        id
    ];
    db.query(sql, values, callback);
};

const eliminarMarca = (id, callback) => {
    const sql = 'DELETE FROM marca WHERE id_marca = ?';
    db.query(sql, [id], callback);
};

const obtenerMarcas = (callback) => {
    const sql = 'SELECT * FROM marca';
    db.query(sql, callback);
};

module.exports = {
    crearMarca,
    editarMarca,
    eliminarMarca,
    obtenerMarcas
};
