import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import DialogItems from "./DialogItems";


const DialogItemsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    };

    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <DialogItems updateNewMessageText={onMessageChange}
                     sendMessage={sendMessage}
                     dialogsPage={state}/>
    )
};

export default DialogItemsContainer;