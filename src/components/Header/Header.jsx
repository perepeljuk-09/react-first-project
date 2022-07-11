import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://logos-download.com/wp-content/uploads/2021/01/Moscow_Logo_black_text-2048x1364.png' alt="Moscow logotype"/>
        <div className={s.loginBlock}>
            { props.isAuth ? <div>{props.login}</div>
                :<NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;