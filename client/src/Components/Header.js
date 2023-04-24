import React, {Component, useContext} from 'react';
import {Button, Container, FormControl, Navbar, Nav, Form} from "react-bootstrap";
import logo from './logobook.png';

import Basket from "../Pages/Basket";
import Book from "../Pages/Book";
import Contacts from "../Pages/Contacts";
import Auth from "../Pages/Auth";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Header = observer(() => {
    const {user} = useContext(Context)
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
                                {user.isAuth ?
                                    <Nav className="ms-2 my-2">
                                        <Button variant="light" href="/auth">Войти</Button>
                                    </Nav>
                                    :
                                    <Nav className="ms-2 my-2 ">
                                        <Button variant="light" onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                                    </Nav>
                                }

                            </Navbar.Collapse>

                        </Container>
                    </Navbar>
                    <Routes>
                        <Route path="/book" element ={<Book/>} />
                        <Route path="/basket" element ={<Basket/>} />
                        <Route path="/contacts" element ={<Contacts/>} />
                        <Route path="/auth" element ={<Auth/>} />
                        <Route path="/login" element ={REGISTRATION_ROUTE} />
                        <Route path="/registration" element ={LOGIN_ROUTE} />
                    </Routes>
                </Router>
            </>
        );
    });


export default Header;