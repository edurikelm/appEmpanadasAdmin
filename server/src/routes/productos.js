const { Router } = require('express')
const { getproductos, postProducto, putProducto, deleteProducto, getProducto } = require('../controllers/productos')
const route = Router()

route.get('/', getproductos)
route.get('/:id', getProducto)
route.post('/', postProducto)
route.put('/:id', putProducto)
route.delete('/:id', deleteProducto)

module.exports = route