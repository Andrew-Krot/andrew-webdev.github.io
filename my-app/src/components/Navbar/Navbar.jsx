import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import FriendItem from "../Friends/FriendItem/FriendItem";

const Navbar = (props) => {

    let sideBarElements = props.friends.map(s => <FriendItem photo={s.photo} name={s.name} key={s.id} id={s.id}/>);

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
            <div className={s.friendsTitle}>
                <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
            </div>
            <div className={s.friendsElements}>
                {sideBarElements}
            </div>
        </nav>
    );
};

export default Navbar;
