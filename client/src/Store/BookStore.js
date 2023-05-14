import {makeAutoObservable} from "mobx";

export default class BookStore {
    constructor() {
        this._genres = [
            {id: 1, name:'Детектив'},
            {id: 2, name:'Мелодрама'},
            {id: 3, name:'Научная фантастика'},
            {id: 4, name:'Триллер'},
        ]
        this._authors = [
            {id: 1, name:'Мелодрама'},
            {id: 2, name:'Агата Кристи'}
        ]
        this._books = [
            {id: 1, name:'"10 негритят"', depiction: 'Детективный роман, написанный в 1939 году', img: `66599932-c4d7-4883-99f1-53b462899464.jpg`},
            {id: 2, name:'"Смерть на Ниле"', depiction: 'Детективный роман, опубликованный в 1937 году. Один из самых известных и значительных романов Агаты Кристи.', img: `4d0d3384-e94d-4187-9e4a-75a4dc1a8fc4.jpg`},
            {id: 3, name:'"10 негритят"', depiction: 'Детективный роман, написанный в 1939 году', img: `66599932-c4d7-4883-99f1-53b462899464.jpg`},
            {id: 4, name:'"Смерть на Ниле"', depiction: 'Детективный роман, опубликованный в 1937 году. Один из самых известных и значительных романов Агаты Кристи.', img: `4d0d3384-e94d-4187-9e4a-75a4dc1a8fc4.jpg`},
            {id: 5, name:'"10 негритят"', depiction: 'Детективный роман, написанный в 1939 году', img: `66599932-c4d7-4883-99f1-53b462899464.jpg`},
            {id: 6, name:'"Смерть на Ниле"', depiction: 'Детективный роман, опубликованный в 1937 году. Один из самых известных и значительных романов Агаты Кристи.', img: `4d0d3384-e94d-4187-9e4a-75a4dc1a8fc4.jpg`},
        
        ]
        this._selectedGenre = {}
        this._selectedAuthor = {}
        makeAutoObservable(this)
    }

    setGenres(genres){
        this._genres = genres
    }

    setAuthors(authors){
        this._authors = authors
    }

    setBooks(books){
        this._books = books
    }

    setSelectedGenre(genre){
        this._selectedGenre = genre

    }

    setSelectedAuthor(author){
        this._selectedAuthor = author

    }

    get genres(){
        return this._genres
    }

    get books(){
        return this._books
    }

    get authors(){
        return this._authors
    }

    get selectedGenre(){
        return this._selectedGenre
    }

    get selectedAuthor(){
        return this._selectedAuthor
    }
}