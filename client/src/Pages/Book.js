import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import GenreBar from '../Components/GenreBar';
import AuthBar from '../Components/AuthBar';
import BookList from '../Components/BookList';

const Book = () => {
    return (
        <Container>
            <Row className="mt-5">
                <Col md={3}>
                    <GenreBar />
                </Col>
                <Col md={9}>
                    <AuthBar />
                    <BookList />
                </Col>
            </Row>
        </Container>

    );
};

export default Book;