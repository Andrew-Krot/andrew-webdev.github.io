import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import DialogItems from "./DialogItems";
import StoreContext from "../../../StoreContext";


const DialogItemsContainer = () => {debugger


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let sendMessage = () => {
                        store.dispatch(sendMessageActionCreator());
                    };

                    let onMessageChange = (text) => {
                        let action = updateNewMessageTextActionCreator(text);
                        store.dispatch(action);
                    };

                    return <DialogItems updateNewMessageText={onMessageChange}
                                        sendMessage={sendMessage}
                                        dialogs={state.dialogsPage.dialogs}
                                        messages={state.dialogsPage.messages}
                                        newMessageText={state.dialogsPage.newMessageText}/>
                }
            }
        </StoreContext.Consumer>
    )
};

export default DialogItemsContainer;