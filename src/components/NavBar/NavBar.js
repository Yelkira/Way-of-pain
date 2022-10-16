import React from "react";
import "./NavBar.module.css";
import s from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const setActive = navData => navData.isActive ? s.active : s.item;
const NavBar = () => {
    return (<nav className={s.nav}>
        <div>
            <NavLink to="/profile" className={setActive}>Profile</NavLink>
        </div>
        <div>
            <NavLink to="/dialogs" className={setActive}>Messages</NavLink>
        </div>
        <div>
            <NavLink to="/news" className={setActive}>News</NavLink>
        </div>
        <div>
            <NavLink to="/music" className={setActive}>Music</NavLink>
        </div>
        <div>
            <NavLink to="/settings" className={setActive}>Settings</NavLink>
        </div>
    </nav>);
}
export default NavBar;
