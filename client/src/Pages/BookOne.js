import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row, Button } from 'react-bootstrap';
import {useParams, uswParams} from 'react-router-dom'
import { fetchOneBook } from '../http/bookAPI';

const BookOne = () => {
    const [book, setBook] = useState({depiction: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneBook(id).then(data => setBook(data))
    },[])

    return (
        <Container>
            <Row>
               <Col md={4}>
                <Image widht={300} height={300} src = {process.env.REACT_APP_API_URL + book.img}/>
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