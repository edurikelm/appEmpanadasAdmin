const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.19uag.mongodb.net/')
    console.log('Base de datos conectada')
  } catch (err) {
    console.log(err)
  }
}

module.exports = dbConnection