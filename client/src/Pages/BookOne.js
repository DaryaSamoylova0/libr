import React, { useEffect, useState, useContext } from 'react';
import { Card, Col, Container, Image, Row, Button } from 'react-bootstrap';
import { useParams} from 'react-router-dom'
import { fetchOneBook } from '../http/bookAPI';
import {Context} from "../index";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const BookOne = () => {
    const [book, setBook] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneBook(id).then(data => setBook(data))
    },[])

    console.log(id)

    return (
        <Container>
            <Row>
               <Col md={4}>
                
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
                    <Button variant="dark" className="m-5 authcard">Добавить в корзину</Button>
                </Card>
            
            </Col> 
            </Row>
            
            
        </Container>
    );

};

export default BookOne;