import React from 'react';
// import Events from '../../pages/Events';
import './Hometop.css'
import Navbar from './Navbar';
import ScroolIcon from './ScroolIcon';
const Hometop = () => {

    return (

        <>
        <Navbar />
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
                    <div className="event ev1">
                        <h1>Tecnoesis</h1>
                        <img src="https://tecnoesis.org/_next/static/media/tecnoesis.1fef38ca.png" alt="" />
                        <h2 className='h2-event'>Organized by CES Proudly presented to students by the students.</h2>
                    </div>
                    <div className="event ev2">
                    <h1>SportsMania</h1>
                        <img src="https://tecnoesis.org/_next/static/media/tecnoesis.1fef38ca.png" alt="" />
                        <h2 className='h2-event'>Organized by CES Proudly presented to students by the students.</h2>
                    </div>
                    <div className="event ev3">
                    <h1>My City My Dream</h1>
                        <img src="https://tecnoesis.org/_next/static/media/tecnoesis.1fef38ca.png" alt="" />
                        <h2 className='h2-event'>Organized by CES Proudly presented to students by the students.</h2>
                    </div>
                </div>
            </div>

            <div className="scroll-home">
                <a href="/#a-us"><p className='p-sc'>Scroll</p>
                    <ScroolIcon /></a>
            </div>
            {/* <Events /> */}
        </>
    )
}

export default Hometop