import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem photo={d.photo} name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>);

    let newMessage = React.createRef();

    let sendMessage = () => {
        let text = newMessage.current.value;
        props.sendMessage(text);
        newMessage.current.value = '';
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
                    <textarea ref={newMessage}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;