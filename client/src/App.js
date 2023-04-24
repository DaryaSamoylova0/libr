import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";

function App() {
    return (
        <>
            <Header />
            <Footer />
        </>

    );
}

export default App;
