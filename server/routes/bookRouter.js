const Router = require('express')
const router = new Router()
const bookController = require('../controllers/bookController')

router.post('/', bookController.create)           //создавать
router.get('/', bookController.getAll)                  //получать
router.get('/:id', bookController.getOne)

module.exports = router