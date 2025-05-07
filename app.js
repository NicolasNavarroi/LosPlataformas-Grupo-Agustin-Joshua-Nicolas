const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Importar rutas
const categoriaRoutes = require('./routes/categoria');
const marcaRoutes = require('./routes/marca');
const productoRoutes = require('./routes/producto');
const tarjetaRoutes = require('./routes/tarjeta');
const usuarioRoutes = require('./routes/usuarios');
const verificadorRoutes = require('./routes/verificador');

// Configuración de middleware
app.use(cors());
app.use(bodyParser.json()); // Esto es necesario para que la app pueda leer los cuerpos en formato JSON
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de rutas
app.use('/api/categorias', categoriaRoutes);
app.use('/api/marcas', marcaRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/tarjetas', tarjetaRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/verificador', verificadorRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡API funcionando!');
});

// Manejo de errores 404
app.use((req, res, next) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

// Puerto en el que corre la aplicación
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
