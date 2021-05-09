import React from 'react';
import { NavLink } from 'react-router-dom';
import web1 from "../src/images/Eat_sleep_game_repeat_6125.svg";
import Common from "./Common"

const About = () => {
    return(
    <>
    <Common 
    name="Know something About" 
    imgsrc={web1} 
    visit="/contact" 
    btname="Contact Us" 
    />
    </>
    );
};

    export default About;