import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import DialogItems from "./DialogItems";
import {connect} from "react-redux";


// const DialogItemsContainer = () => {
//     debugger
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     let sendMessage = () => {
//                         store.dispatch(sendMessageActionCreator());
//                     };
//
//                     let onMessageChange = (text) => {
//                         let action = updateNewMessageTextActionCreator(text);
//                         store.dispatch(action);
//                     };
//
//                     return <DialogItems updateNewMessageText={onMessageChange}
//                                         sendMessage={sendMessage}
//                                         dialogs={state.dialogsPage.dialogs}
//                                         messages={state.dialogsPage.messages}
//                                         newMessageText={state.dialogsPage.newMessageText}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// };

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
};

const DialogItemsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItems);

export default DialogItemsContainer;