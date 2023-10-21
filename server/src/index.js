const express = require('express');
const cors = require('cors')
require('dotenv').config()
const dbConnection = require('./config/database');

const app = express();

//Conectarse a BBDD
dbConnection()

//CORS
app.use(cors())

//Lectura y parseo del body
app.use(express.json())

//Rutas
app.use('/api/items', require('./routes/items'));

//Escuchar en puerto
app.listen(process.env.PORT, () => {
  console.log('Escuchando en puerto: ', process.env.PORT);
});
