import React from "react";
import logo from "../../img/logo.png";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <NavLink to=''><img className={s.logo} src={logo} alt="logo" /></NavLink>
      </div>
    </header>
  );
};

export default Header;
