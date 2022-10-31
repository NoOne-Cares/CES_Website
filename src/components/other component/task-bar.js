import React from "react";
import './tsk-bar.css'
import { NavLink } from "react-router-dom";

const TaskBar= () => {
    return (
        <div>
        <div class="navbar">
        <img className="img" src="./other img/logo.png" alt='not available' />
            <div class="content">
                <NavLink className="item ,text,home" to={'/'} style={{textDecoration:'none'}}>Home</NavLink>
                <NavLink className="item ,text, gallery" to={'/gallery'} style={{textDecoration:'none'}}>Gallery</NavLink>
                <NavLink className="item , text,member" to={'/member'} style={{textDecoration:'none'}}>Member</NavLink>
                <NavLink className="item , text, facility" to={'/facility'} style={{textDecoration:'none'}}>Facility</NavLink>
                <NavLink className="item ,text, allumini" to={'/allumni'} style={{textDecoration:'none'}}>Allumni</NavLink>
                <NavLink  className="item ,text, dwcontent" to={'/developers'}style={{textDecoration:'none'}}>Developers</NavLink>
            </div>
        </div>
    </div>


)
};
export default TaskBar