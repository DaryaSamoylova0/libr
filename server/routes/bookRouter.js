const Router = require('express')
const router = new Router()
const bookController = require('../controllers/bookController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), bookController.create)           //создавать
router.get('/', bookController.getAll)                  //получать
router.get('/:id', bookController.getOne)

module.exports = router