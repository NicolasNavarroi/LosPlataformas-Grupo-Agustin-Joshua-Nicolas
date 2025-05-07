const db = require('../config/bd');

const crearCategoria = (categoria, callback) => {
    const sql = 'INSERT INTO categoria (nombre, descripcion) VALUES (?, ?)';
    db.query(sql, [categoria.nombre, categoria.descripcion], callback);
};

const editarCategoria = (id, datos, callback) => {
    const sql = 'UPDATE categoria SET nombre = ?, descripcion = ? WHERE id_categoria = ?';
    db.query(sql, [datos.nombre, datos.descripcion, id], callback);
};

const eliminarCategoria = (id, callback) => {
    const sql = 'DELETE FROM categoria WHERE id_categoria = ?';
    db.query(sql, [id], callback);
};

const obtenerCategorias = (callback) => {
    const sql = 'SELECT * FROM categoria';
    db.query(sql, callback);
};

module.exports = {
    crearCategoria,
    editarCategoria,
    eliminarCategoria,
    obtenerCategorias
};
