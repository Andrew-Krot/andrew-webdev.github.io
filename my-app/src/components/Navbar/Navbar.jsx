import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.items}>
                <li className={s.item}>
                    <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>Dialogs</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
                </li>
            </ul>

            <div className={s.friends}>
                <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
            </div>
            <Friends/>

        </nav>
    );
};

export default Navbar;
