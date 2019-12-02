import React from 'react';
import s from './DialogItems.module.css';
import Item from "./Item/Item";
import MessageItem from "./Message/MessageItem";

const DialogItems = (props) => {

    let dialogsElements = props.dialogs.map(d => <Item photo={d.photo} name={d.name} id={d.id}/>);

    let messagesElements = props.messages.map(m => <MessageItem message={m.message} id={m.id}/>);

    let newMessage = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {debugger
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessage}
                              value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
};

export default DialogItems;