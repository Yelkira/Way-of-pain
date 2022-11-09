import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (<header className={s.header}>
        <img alt="siso"
             src="https://static8.depositphotos.com/1378583/1010/i/600/depositphotos_10108949-stock-photo-blue-flame-logo.jpg"/>

        <div className={s.loginBlock}>
            { props.isAuth ? props.login
                : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>);
}
export default Header;