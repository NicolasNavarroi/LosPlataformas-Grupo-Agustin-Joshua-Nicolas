const db = require('../config/bd');

const crearTarjeta = (tarjeta, callback) => {
    const sql = `INSERT INTO Tarjeta_credito 
    (Numero_tarjeta, Nombre_titular, Fecha_exp, cvv, Usuario_idUsuario) 
    VALUES (?, ?, ?, ?, ?)`;

const values = [
    tarjeta.Numero_tarjeta,
    tarjeta.Nombre_titular,
    tarjeta.Fecha_exp,
    tarjeta.cvv,
    tarjeta.Usuario_idUsuario
    ];
    db.query(sql, values, callback);
};

const editarTarjeta = (id, datos, callback) => {
    const sql = `UPDATE Tarjeta_credito SET 
        Numero_tarjeta = ?, 
        Nombre_titular = ?, 
        Fecha_exp = ?, 
        cvv = ?, 
        Usuario_idUsuario = ?
        WHERE id_tarjeta = ?`;
    const values = [
        datos.Numero_tarjeta,
        datos.Nombre_titular,
        datos.Fecha_exp,
        datos.cvv,
        datos.Usuario_idUsuario,
        id
    ];
    db.query(sql, values, callback);
};

const eliminarTarjeta = (id, callback) => {
    const sql = 'DELETE FROM Tarjeta_credito WHERE id_tarjeta = ?';
    db.query(sql, [id], callback);
};

const obtenerTarjetas = (callback) => {
    const sql = 'SELECT * FROM Tarjeta_credito';
    db.query(sql, callback);
};

module.exports = {
    crearTarjeta,
    editarTarjeta,
    eliminarTarjeta,
    obtenerTarjetas
};
