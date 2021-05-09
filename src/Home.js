import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/game1.svg";
import Common from './Common';

const Home = () => {
    return(
    <>
    <Common 
    name="Buy Best Games here at" 
    imgsrc={web} 
    visit="/service" 
    btname="Buy Now" 
    />
    </>
    );
};

    export default Home;