import React, { useContext, useState } from 'react';
import {Container, Form, Card, Button, Row, NavLink} from 'react-bootstrap'
import header from "../Components/Header";
import {BOOK_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {useLocation, useNavigate} from "react-router-dom";
import Book from "./Book";
import Basket from "./Basket";
import Contacts from "./Contacts";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async() => {
        try{
            let data;
        if(isLogin){
            data = await login(email, password)
        }else{
            data = await registration( email, password)
        }

        user.setUser(data)
        user.setIsAuth(true)
        history.navigate(BOOK_ROUTE)
        }catch (e) {
            alert(e.response.data.messange)
        }
        
        
    }


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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
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
                        <Button className="mt-3" variant="primary" onClick={click}>
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
});

export default Auth;