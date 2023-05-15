import React, { useContext, useEffect } from 'react';
import {Col, Container, Row} from "react-bootstrap";
import GenreBar from '../Components/GenreBar';
import AuthBar from '../Components/AuthBar';
import BookList from '../Components/BookList';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchAuthors, fetchGenres, fetchBooks } from '../http/bookAPI';
import Pages from '../Components/Pages';

const Book = observer(() => {
    const {book} = useContext(Context)

    useEffect(() => {
        fetchGenres().then(data => book.setGenres(data))
        fetchAuthors().then(data => book.setAuthors(data))
        fetchBooks().then(data => {
            book.setBooks(data.rows)
            book.setTotalCount(data.count)
        })
    }, [])

    return (
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

    );
});

export default Book;