const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dbConnection = require('./config/database');

const app = express();

//Conectarse a BBDD
dbConnection();

//CORS
app.use(cors());

//Directorio publico para visualizar nuestra pagina del fornt
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/items', require('./routes/items'));
app.use('/api/productos', require('./routes/productos'));
app.use('/api/ventas', require('./routes/ventas'));

//Escuchar en puerto
app.listen(process.env.PORT, () => {
  console.log('Escuchando en puerto: ', process.env.PORT);
});
