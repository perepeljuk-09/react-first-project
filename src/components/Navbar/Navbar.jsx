import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile" className={navActive =>navActive.isActive ? s.active:s.inactive}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={navActive =>navActive.isActive ? s.active:s.inactive}>Messages</NavLink>
            </div>
            <div>
              <NavLink to="/news" className={navActive =>navActive.isActive ? s.active:s.inactive}>News</NavLink>
            </div>
            <div>
              <NavLink to="/music" className={navActive =>navActive.isActive ? s.active:s.inactive}>Music</NavLink>
            </div>
            <div>
              <NavLink to="/settings" className={navActive =>navActive.isActive ? s.active:s.inactive}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;