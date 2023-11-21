const { Schema, model } = require('mongoose')

const ProductoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String
  },
  valor:{
    type: Number,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  imagen: {
    type: String,
    required: true
  },
  estado: {
    type: Boolean,
    required: true
  }
}, {timestamps: true})

module.exports = model('Producto', ProductoSchema)