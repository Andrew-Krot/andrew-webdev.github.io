import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import DialogItems from "./DialogItems";
import StoreContext from "../../../StoreContext";


const DialogItemsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;
                    let sendMessage = () => {
                        store.dispatch(sendMessageActionCreator());
                    };

                    let onMessageChange = (text) => {
                        let action = updateNewMessageTextActionCreator(text);
                        store.dispatch(action);
                    };

                    return <DialogItems updateNewMessageText={onMessageChange}
                                        sendMessage={sendMessage}
                                        dialogsPage={state}/>
                }
            }
        </StoreContext.Consumer>
    )
};

export default DialogItemsContainer;