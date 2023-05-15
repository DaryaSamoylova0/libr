import React, { useContext } from "react";
import {observer} from "mobx-react-lite";

import {Context} from "../index";
import { Card, Col, ListGroup, Row, Image } from "react-bootstrap";
import { Route, useNavigate } from "react-router-dom"
import { BOOK_ROUTE } from "../utils/consts";
import BookOne from "../Pages/BookOne";

const BookItem = ({book}) => {
    //const history = useNavigate();
    

    return(
        <>
        
            <Col md={3} /*onClick={() => history.navigate(BOOK_ROUTE + '/' + book.id)}*/ >
                <Card style={{width: 150, cursor: 'pointer', marginTop: 15}} border={"light"}>
                    <Image width={150} height={150} src={book.img}/>
                    <div className="text-black-50 mt-1 d-flex justify-content-between aligh-items-center">
                        <div>kghj</div>
                        <div></div>
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