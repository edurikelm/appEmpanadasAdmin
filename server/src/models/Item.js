const { Schema, model } = require('mongoose')

const ItemSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  valor:{
    type: String,
    required: true
  },
  fecha:{
    type: Date,
    default: new Date(),
    required: true
  }
}, {timestamps: true})

module.exports = model('Item', ItemSchema)