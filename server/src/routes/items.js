const { Router } = require('express');
const { getItems, postItem, putItem, deleteItem } = require('../controllers/items');

const router = Router()

router.get('/', getItems)
router.post('/',postItem )
router.put('/:id', putItem)
router.delete('/:id', deleteItem)

module.exports = router