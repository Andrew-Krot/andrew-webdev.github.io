import React from 'react';
import s from './FriendItem.module.css';
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {
    let path = "/friends/" + props.id
    return (
        <div>
            <div className={s.item}>
                <NavLink to={path}>
                    {props.photo}
                    {props.name}
                </NavLink>
            </div>
        </div>
    )
}


export default FriendItem;