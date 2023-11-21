const { Router } = require('express')
const { getproductos, postProducto, putProducto, deleteProducto } = require('../controllers/productos')
const route = Router()

route.get('/', getproductos)
route.post('/', postProducto)
// route.get('/:id', getProducto)
route.put('/:id', putProducto)
route.delete('/:id', deleteProducto)

module.exports = route