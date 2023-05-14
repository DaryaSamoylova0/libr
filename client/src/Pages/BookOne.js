import React from 'react';
import { Col, Container, Image } from 'react-bootstrap';

const BookOne = () => {
    const book = {id: 1, name:'"10 негритят"', depiction: 'Детективный роман, написанный в 1939 году', img: `66599932-c4d7-4883-99f1-53b462899464.jpg`};

    return (
        <Container>
            <Col md={4}>
                <Image widht={300} height={300} src = {book.img}/>
            </Col>
            <Col md={4}>
            
            </Col>
            <Col md={4}>
            
            </Col>
        </Container>
    );
};

export default BookOne;