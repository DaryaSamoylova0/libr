const Router = require('express')
const router = new Router()
const bookController = require('../controllers/bookController')

router.post('/', )           //создавать
router.get('/', bookController.getAll)                  //получать
router.get('/:id', bookController.getOne)

module.exports = router