const uuid = require('uuid')
const path = require("path");
const {Book} = require('../models/models')
const ApiError = require('../error/ApiError');

class BookController{
    async create(req, res, next) {
        try{
            const {name, depiction, authorId, genreId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const book = await Book.create({name, depiction, authorId, genreId, img:fileName})

            return res.json(book)
        } catch (e) {
            next(ApiError.badReguest(e.message))
        }

    }
    async getAll(req, res) {
        let {genreId, authorId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let book;
        if (!genreId && !authorId) {
            book = await Book.findAndCountAll({limit, offset})
        }
        if (genreId && !authorId) {
            book = await Book.findAndCountAll({where: {genreId}, limit, offset})
        }
        if (!genreId && authorId) {
            book = await Book.findAndCountAll({where: {authorId}, limit, offset})
        }
        if (genreId && authorId) {
            book = await Book.findAndCountAll({where: {genreId, authorId}, limit, offset})
        }
        return res.json(book)

    }
    async getOne(req, res) {

    }
}

module.exports = new BookController()