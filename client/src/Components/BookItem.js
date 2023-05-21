import React, { useContext } from "react";
import {observer} from "mobx-react-lite";

import {Context} from "../index";
import { Card, Col, ListGroup, Row, Image } from "react-bootstrap";
import {  useNavigate } from "react-router-dom"
import { BOOK_ROUTE } from "../utils/consts";
import BookOne from "../Pages/BookOne";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const BookItem = ({book}) => {
    //const history = useNavigate();
    return(
        <> 
            <Col md={3} /*onClick={() => history.navigate(BOOK_ROUTE + '/' + book.id)}*/ >
            <Link  style={{ textDecoration: 'none' }} to={`/book/${book.id}`}>
                <Card style={{width: 150, cursor: 'pointer', marginTop: 40, marginBottom:70}} border={"light"}>
                    <Image width={150} height={190} src={process.env.REACT_APP_API_URL + book.img}/>
                    <div className="text-black-50 mt-1 d-flex justify-content-between aligh-items-center">
                        <div>Название:</div>
                        <div></div>
                    </div>
                    <div>
                        {book.name}
                    </div>
                </Card>
            </Link>
            </Col>
          
        </>
    );
};

export default BookItem;