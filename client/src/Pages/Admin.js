import React, { useState } from 'react';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';    
import CreateGenre from '../Components/modals/CreateGenre';
import CreateBook from '../Components/modals/CreateBook';
import CreateAuthor from '../Components/modals/CreateAuthor';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/pagination.css';

const Admin = () => {
    const [genreVisible, setGenreVisible] = useState(false);
    const [authorVisible, setAuthorVisible] = useState(false);
    const [bookVisible, setBookVisible] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button variant="dark" className=" m-4 authcard" onClick={() => setGenreVisible(true)}>
                Добавить жанр
            </Button>
            <Button variant="dark" className="m-4 authcard" onClick={() => setAuthorVisible(true)}>
                Добавить автора
            </Button>
            <Button /*variant={"outline-primary"}*/ variant="dark" className="m-4 authcard" onClick={() => setBookVisible(true)}>
                Добавить книгу
            </Button>
            <Button href="/book" variant="dark" className="m-5 authcard">
                Выйти из админ панели
            </Button>


            <CreateGenre show={genreVisible} onHide={() => setGenreVisible(false)}/> 
            <CreateBook show={bookVisible} onHide={() => setBookVisible(false)}/>
            <CreateAuthor show={authorVisible} onHide={() => setAuthorVisible(false)}/>
        </Container>    
           
    );
};

export default Admin;