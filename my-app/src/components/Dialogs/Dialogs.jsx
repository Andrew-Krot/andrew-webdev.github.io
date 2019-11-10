import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = () => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to="/dialogs/1">Dimych</NavLink>
    </div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div>
                <ul className={s.dialogsItems}>
                    <DialogItem name="Dimych" id=1/>
                    <li className={s.dialog}>
                        <NavLink to="/dialogs/2">Dron</NavLink>
                    </li>
                    <li className={s.dialog}>
                        <NavLink to="/dialogs/3">Lena</NavLink>
                    </li>
                    <li className={s.dialog}>
                        <NavLink to="/dialogs/4">Marina</NavLink>
                    </li>
                    <li className={s.dialog}>
                        <NavLink to="/dialogs/5">Olya</NavLink>
                    </li>
                    <li className={s.dialog}>
                        <NavLink to="/dialogs/6">Masha</NavLink>
                    </li>
                </ul>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Nice!</div>
            </div>
        </div>
    )
};

export default Dialogs;