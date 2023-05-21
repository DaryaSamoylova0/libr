import React, { useContext, useEffect } from 'react';
import {Col, Container, Row} from "react-bootstrap";
import GenreBar from '../Components/GenreBar';
import AuthBar from '../Components/AuthBar';
import BookList from '../Components/BookList';
import Footer from "../Components/Footer";
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchAuthors, fetchGenres, fetchBooks } from '../http/bookAPI';
import Pages from '../Components/Pages';
import background from '../assets/bg.jpg';

const Book = observer(() => {
    const {book} = useContext(Context)

    useEffect(() => {
        fetchGenres().then(data => book.setGenres(data))
        fetchAuthors().then(data => book.setAuthors(data))
        fetchBooks(null, null, 1, 8).then(data => {
            book.setBooks(data.rows)
            book.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchBooks(book.selectedGenre.id, book.selectedAuthor.id, book.page, 8).then(data => {
            book.setBooks(data.rows)
            book.setTotalCount(data.count)
        })
    }, [book.page, book.selectedGenre, book.selectedAuthor])

    return (
        <div /*style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}*/>
        <Container>
            <Row className="mt-5">
                <Col md={3}>
                    <GenreBar />
                </Col>
                <Col md={9}>
                    <AuthBar />
                    <BookList />
                    <Pages />
                </Col>
            </Row>
        </Container>
        </div>

    );
});

export default Book;