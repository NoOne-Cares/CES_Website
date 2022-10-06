import React from "react";
import './tsk-bar.css'
import logo from "./logo.png"
import { NavLink } from "react-router-dom";

const TaskBar= () => {
    return (
        <div>
        <div class="navbar">
        <div> <img className="img" src={logo} alt='not available' /></div>
            <div class="content">
                <NavLink className="item ,text,home" to={'/'} style={{textDecoration:'none'}}>Home</NavLink>
                <NavLink className="item ,text, gallery" to={'/gallery'} style={{textDecoration:'none'}}>Gallery</NavLink>
                <NavLink className="item , text,member" to={'/member'} style={{textDecoration:'none'}}>Member</NavLink>
                <NavLink className="item , text, facility" to={'/facility'} style={{textDecoration:'none'}}>Facility</NavLink>
                <NavLink className="item ,text, allumini" to={'/allumni'} style={{textDecoration:'none'}}>Allumni</NavLink>
                <div className="dropdown">
                    <NavLink class="item , text , more" to={'#'}style={{textDecoration:'none'}}>More</NavLink>
                    <div className="DropDownContent">
                        <NavLink  className="dwcontent" to={'/resouces'}style={{textDecoration:'none'}}>Resources</NavLink>
                        <NavLink  className="dwcontent" to={'/student-corner'}style={{textDecoration:'none'}}>Student Corner</NavLink>
                        <NavLink  className="dwcontent" to={'/developers'}style={{textDecoration:'none'}}>Developers</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>


)
};
export default TaskBar