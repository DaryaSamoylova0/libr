import React from 'react';
import { Card, Col, Container, Image, Row, Button } from 'react-bootstrap';

const BookOne = () => {
    const book = {id: 1, name:'"10 негритят"', depiction: 'Детективный роман, написанный в 1939 году', img: `66599932-c4d7-4883-99f1-53b462899464.jpg`};

    return (
        <Container>
            <Row>
               <Col md={4}>
                <Image widht={300} height={300} src = {book.img}/>
            </Col>
            <Col md={4}>
                <Row>
                    <h2>{book.name}</h2>
                </Row>
            
            </Col>
            <Col md={4}>
                <Card 
                className="d-flex flex-column aligh-items-center justify-content-around"
                style={{width: 300, height: 300, fontSize: 32, border:'5px solid primary'}}
                >
                    <h3>{book.depiction}</h3>
                    <Button variant={"outline-primary"}>Добавить в корзину</Button>
                </Card>
            
            </Col> 
            </Row>
            
            
        </Container>
    );
};

export default BookOne;