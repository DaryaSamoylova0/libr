const Router = require('express')
const router = new Router()
const authorRouter = require('./authorRouter')
const bookRouter = require('./bookRouter')
const genreRouter = require('./genreRouter')
const statusRouter = require('./statusRouter')
const userRouter = require('./userRouter')


router.use('/user', userRouter)
router.use('/book', bookRouter)
router.use('/genre', genreRouter)
router.use('/author', authorRouter)
router.use('/status', statusRouter)


module.exports = router