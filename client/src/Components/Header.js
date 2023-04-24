import React, {Component} from 'react';
import {Button, Container, FormControl, Navbar, Nav, Form} from "react-bootstrap";
import logo from './logobook.png';

import Basket from "../Pages/Basket";
import Book from "../Pages/Book";
import Contacts from "../Pages/Contacts";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <>
                <Router>
                    <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
                        <Container>
                            <Navbar.Brand href="/">
                                <img
                                    src={logo}
                                    height="50"
                                    width="50"
                                    className="d-inline-block align-top"
                                    alt="Logo"
                                />
                            </Navbar.Brand>
                            <Navbar.Brand href="#">Библиотека</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto my-2 my-lg-0">
                                    <Nav.Link href="/book">Книги</Nav.Link>
                                    <Nav.Link href="/basket">Корзина</Nav.Link>
                                    <Nav.Link href="/contacts">Контакты</Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="text"
                                        placeholder="Поиск"
                                        className="me-sm-2"
                                    />
                                    <Button variant="light">Поиск</Button>
                                </Form>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Routes>
                        <Route path="/book" element ={<Book/>} />
                        <Route path="/basket" element ={<Basket/>} />
                        <Route path="/contacts" element ={<Contacts/>} />
                    </Routes>
                </Router>
            </>
        );
    }
}

export default Header;