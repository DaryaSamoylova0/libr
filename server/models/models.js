const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define( 'user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define( 'basket',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketBook = sequelize.define( 'basket_book',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Book = sequelize.define( 'book',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    depiction: {type: DataTypes.STRING, unique: true},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Author = sequelize.define( 'author',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Genre = sequelize.define( 'genre',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Status = sequelize.define( 'status',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketBook)
BasketBook.belongsTo(Basket)

Genre.hasMany(Book)
Book.belongsTo(Genre)

Author.hasMany(Book)
Book.belongsTo(Author)

Book.hasOne(BasketBook)
BasketBook.belongsTo(Book)

Status.hasMany(Book)
Book.belongsTo(Status)

module.exports = {
    User,
    Basket,
    Book,
    BasketBook,
    Genre,
    Author,
    Status
}