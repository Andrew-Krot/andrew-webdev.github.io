import React from 'react';
import s from './Dialogs.module.css';
import DialogItemsContainer from "./DialogItems/DialogItemsContainer";


const Dialogs = (props) => {

    return (
        <div className={s.content}>
            <DialogItemsContainer/>
        </div>
    );
};

export default Dialogs;
