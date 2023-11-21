const { Schema, model } = require('mongoose')

const VentaSchema = new Schema({
  cantidad: {
    type: Number,
    required: true
  },
  fecha:{
    type: Date,
    default: new Date(),
    required: true
  },
  producto:{
    type: Schema.Types.ObjectId,
    ref: 'Producto',
    required: true
  }
}, {timestamps: true})

module.exports = model('Venta', VentaSchema)