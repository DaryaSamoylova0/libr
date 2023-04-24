import React from 'react';
import {Container, Form, Card, Button, Row, NavLink} from 'react-bootstrap'
import header from "../Components/Header";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {useLocation} from "react-router-dom";
import Book from "./Book";
import Basket from "./Basket";
import Contacts from "./Contacts";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)


    return (
       // <>
       // <Router>
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto"> { isLogin ? 'Авторизация' : "Регистрация"} </h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите email"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль"
                    />
                    <Form className="d-flex justify-content-between">
                        {isLogin ?
                            <div className="mt-4"><NavLink  to={REGISTRATION_ROUTE}>
                                Нет аккаунта? Зарегистрируйтесь!</NavLink>
                            </div>
                            :
                            <div className="mt-4"><NavLink  to={LOGIN_ROUTE}>
                                Есть аккаунт? Войдите!
                            </NavLink></div>
                        }
                        <Button className="mt-3" variant="primary">
                            {isLogin ? 'Войти' : 'Регистрация'}

                        </Button>
                    </Form>


                </Form>

            </Card>

        </Container>
         //   <Routes>
             //   <Route path="/book" element ={<Book/>} />
              //  <Route path="/basket" element ={<Basket/>} />
              //  <Route path="/contacts" element ={<Contacts/>} />
               // <Route path="/auth" element ={<Auth/>} />
              //  <Route path="/login" element ={REGISTRATION_ROUTE} />
              //  <Route path="/registration" element ={LOGIN_ROUTE} />
          // </Routes>
       // </Router>
       // </>
    );
};

export default Auth;