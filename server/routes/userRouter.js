const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/registration', userController.registration)           //создавать
router.post('/login', userController.login)                  //получать
router.get('/auth', userController.check)

module.exports = router