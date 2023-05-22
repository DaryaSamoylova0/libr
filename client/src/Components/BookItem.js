import React, { useContext } from "react";
import {observer} from "mobx-react-lite";

import {Context} from "../index";
import { Card, Col, ListGroup, Row, Image, Button } from "react-bootstrap";
import {  useNavigate } from "react-router-dom"
import { BOOK_ROUTE } from "../utils/consts";
import BookOne from "../Pages/BookOne";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const BookItem = ({book}) => {
    //const history = useNavigate();
    return(
        <> 
            <Col md={3} /*onClick={() => history.navigate(BOOK_ROUTE + '/' + book.id)}*/ >
            
                <Card style={{width: 150, cursor: 'pointer', marginTop: 40, marginBottom:70}} border={"light"}>
                    <Link style={{ textDecoration: 'none', color: '#643c34'}} to={`/book/${book.id}`}>
                    <Image width={150} height={190} src={process.env.REACT_APP_API_URL + book.img}/>
                    </Link>
                    <div className="text-black-50 mt-1 d-flex justify-content-between aligh-items-center">
                        <div>Название:</div>
                       
                    </div>
                    <div>
                        {book.name}
                    </div> 
                    
                </Card>
            
            </Col>
          
        </>
    );
};

export default BookItem;