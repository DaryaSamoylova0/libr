import React, {useContext, useEffect, useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import Library from "./Pages/Library";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])
    
    if (loading) {
         return <Spinner animation={"grow"}/>
    }


    return (
        <>
        <Header />
        <Footer />
        </>    
    );
})

export default App;
