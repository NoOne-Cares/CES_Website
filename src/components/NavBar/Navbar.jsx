import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
                <NavLink to="/event">Event</NavLink>
            </li>
            <li>
                <NavLink to="/team">Team</NavLink>
            </li>
        </>
    );
};
