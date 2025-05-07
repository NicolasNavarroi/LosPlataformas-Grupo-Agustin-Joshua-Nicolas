const db = require('../config/bd');

const crearProducto = (producto, callback) => {
    const sql = `INSERT INTO Producto (
        Codigo_producto, nombre, Descripcion, id_categoria, id_marca, 
        Precio, Stock, Imagen, Fecha_ingreso
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())`;

    const values = [
        producto.Codigo_producto,
        producto.nombre,
        producto.Descripcion,
        producto.id_categoria,
        producto.id_marca,
        producto.Precio,
        producto.Stock,
        producto.Imagen
    ];

    db.query(sql, values, callback);
};

const editarProducto = (id, datos, callback) => {
    const sql = `UPDATE Producto SET 
        Codigo_producto = ?, nombre = ?, Descripcion = ?, id_categoria = ?, id_marca = ?, 
        Precio = ?, Stock = ?, Imagen = ?
        WHERE idProducto = ?`;

    const values = [
        datos.Codigo_producto,
        datos.nombre,
        datos.Descripcion,
        datos.id_categoria,
        datos.id_marca,
        datos.Precio,
        datos.Stock,
        datos.Imagen,
        id
    ];

    db.query(sql, values, callback);
};

const eliminarProducto = (id, callback) => {
    const sql = 'DELETE FROM Producto WHERE idProducto = ?';
    db.query(sql, [id], callback);
};

const obtenerProductos = (callback) => {
    const sql = 'SELECT * FROM Producto';
    db.query(sql, callback);
};

module.exports = {
    crearProducto,
    editarProducto,
    eliminarProducto,
    obtenerProductos
};
