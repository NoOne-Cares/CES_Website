import React, { useState } from 'react';
import './Hometop.css'
import ScroolIcon from './ScroolIcon';
const Hometop = () => {
    return (
        <>
            <div className="home-top">
                <div className="hometop-main">
                    <h1>Civil Engineering</h1>
                    <h1>Society</h1>
                    <h3 className='h3-1'>Department of Civil Engineering</h3>
                    <h3>National Institute of Technology, Silchar</h3>
                </div>
            </div>

            <div className="about-us" id='a-us'>
                <h1>About Us</h1>
                <p>The Civil Engineering Society, run by the CE department of NIT Silchar, aims to impart academic, technical and socio-cultural awareness to the students of our beloved college.
                </p>
                <h1>Upcoming Events</h1>
                <div className="events">
                    <div className="event ev1"></div>
                    <div className="event ev2"></div>
                    <div className="event ev3"></div>
                </div>
            </div>

            <div className="scroll-home">
                <a href="/#a-us"><p className='p-sc'>Scroll</p>
                    <ScroolIcon /></a>
            </div>
        </>
    )
}

export default Hometop