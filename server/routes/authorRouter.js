const Router = require('express')
const router = new Router()
const authorController = require('../controllers/authorController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), authorController.create)           //создавать
router.get('/', authorController.getAll)                  //получать

module.exports = router