import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogItems";


const Dialogs = (props) => {

    return (
        <div className={s.content}>
            <DialogItems dialogs={props.dialogsPage.dialogs}
                         messages={props.dialogsPage.messages}
                         newMessageText={props.dialogsPage.newMessageText}
                         dispatch={props.dispatch}/>
        </div>
    );
};

export default Dialogs;
