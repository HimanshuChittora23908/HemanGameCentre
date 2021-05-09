import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from "./Navbar";
import Footer from "./Footer"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const App = () => {
    return(
    <>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/service" component={Service} />
    <Route exact path="/contact" component={Contact} />
    <Redirect to ="/"></Redirect>
    </Switch>
    <Footer />
    </>
    );
};

    export default App;