require('dotenv').config()
const  express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require("path");
const events = require('events')
//const ws = require('ws');

/*const wss = new ws.Server({
    port:5000,
}, () => console.log('Server started on 5000'))*/

const PORT = process.env.PORT || 5000

const emiller = new events.EventEmitter();

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

app.use(errorHandler)


app.get('/get-messages', (req, res) => {
    emiller.once('newMessage', (message) => {
        res.json(message)
    })
})

app.post('/new-messages', ((req, res) => {
    const message = req.body;
    emiller.emit('newMessage', message)
    res.status(200)
}))

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }catch (e) {
        console.log(e)
    }
}

start()