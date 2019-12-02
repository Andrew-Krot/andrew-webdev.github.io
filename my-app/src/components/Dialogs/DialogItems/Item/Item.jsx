import React from 'react';
import s from './Item.module.css';
import {NavLink} from "react-router-dom";

const Item = (props) => {

    let path = "/dialogs/" + props.name;

    return (
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>
            {props.photo}
            {props.name}</NavLink>
    </div>)
};

export default Item;