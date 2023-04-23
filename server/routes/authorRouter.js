const Router = require('express')
const router = new Router()
const authorController = require('../controllers/authorController')

router.post('/', authorController.create)           //создавать
router.get('/', authorController.getAll)                  //получать

module.exports = router