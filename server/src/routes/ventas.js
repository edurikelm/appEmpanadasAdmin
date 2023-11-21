const { Router } = require('express')
const { getVentas, postVenta, putVenta, deleteVenta } = require('../controllers/ventas')
const route = Router()

route.get('/', getVentas)
route.post('/', postVenta)
route.put('/:id', putVenta)
route.delete('/:id', deleteVenta)

module.exports = route