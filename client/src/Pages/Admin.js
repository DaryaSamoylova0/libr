import React, { useState } from 'react';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';    
import CreateGenre from '../Components/modals/CreateGenre';
import CreateBook from '../Components/modals/CreateBook';
import CreateAuthor from '../Components/modals/CreateAuthor';

const Admin = () => {
    const [genreVisible, setGenreVisible] = useState(false);
    const [authorVisible, setAuthorVisible] = useState(false);
    const [bookVisible, setBookVisible] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-primary"} className="m-4" onClick={() => setGenreVisible(true)}>
                Добавить жанр
            </Button>
            <Button variant={"outline-primary"} className="m-4" onClick={() => setAuthorVisible(true)}>
                Добавить автора
            </Button>
            <Button variant={"outline-primary"} className="m-4" onClick={() => setBookVisible(true)}>
                Добавить книгу
            </Button>
            <Button href="/book" className="m-5" variant="outline-primary">
                Выйти из админ панели
            </Button>


            <CreateGenre show={genreVisible} onHide={() => setGenreVisible(false)}/> 
            <CreateBook show={bookVisible} onHide={() => setBookVisible(false)}/>
            <CreateAuthor show={authorVisible} onHide={() => setAuthorVisible(false)}/>
        </Container>    
           
    );
};

export default Admin;