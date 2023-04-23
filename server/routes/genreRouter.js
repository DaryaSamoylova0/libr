const Router = require('express')
const router = new Router()
const genreController = require('../controllers/genreController')

router.post('/', genreController.create)           //создавать
router.get('/', genreController.getAll)                  //получать

module.exports = router