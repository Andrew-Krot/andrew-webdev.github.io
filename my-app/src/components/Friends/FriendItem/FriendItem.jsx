import React from 'react';
import s from './FriendItem.module.css';
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {
    let path = "/" + props.name;
    return (
        <div>
            <div className={s.item}>
                <NavLink to={path}>
                    {props.photo} <br/>
                    {props.name}
                </NavLink>
            </div>
        </div>
    )
}


export default FriendItem;