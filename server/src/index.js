const express = require('express');
const cors = require('cors')
const dbConnection = require('./config/database');

const app = express();

const PORT = 5000;

//Conectarse a BBDD
dbConnection()

//CORS
app.use(cors())

//Lectura y parseo del body
app.use(express.json())

//Rutas
app.use('/api/items', require('./routes/items'));

//Escuchar en puerto
app.listen(PORT, () => {
  console.log('Escuchando en puerto: ', PORT);
});
