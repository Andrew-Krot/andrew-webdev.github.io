import React from 'react';
import s from "../components/Friends/FriendItem/FriendItem.module.css";

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {
            photo: <img
                src="https://himflax.com/wp-content/uploads/2019/08/React-Native%E2%80%94Future-of-Hybrid-App-Development-post-01-1024x1024.jpg"
                className={s.ava}
                alt="dialogAva"/>,
            id: '1',
            name: 'Dimych'
        },
        {
            photo: <img
                src="https://uhdwallpapers.org/uploads/converted/19/08/03/huawei-mediapad-m6-stock-wallpaper-1024x1024_666874-mm-90.jpg"
                className={s.ava}
                alt="dialogAva"/>,
            id: '2',
            name: 'Andrew'
        },
        {
            photo: <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkE7p3KNyZIWzerh5gU_qigzTsDV9uOQFeUn-sImafTM89Pl2R"
                className={s.ava}
                alt="dialogAva"/>,
            id: '3',
            name: 'Lena'
        },
        {
            photo: <img
                src="https://naked-science.ru/wp-content/uploads/2018/12/field_image_moon1-1024x1024.jpg"
                className={s.ava}
                alt="dialogAva"/>,
            id: '4',
            name: 'Marina'
        },
        {
            photo: <img
                src="https://www.fertilizerdaily.ru/wp-content/uploads/2019/11/2019-08-13T015706Z_1557258821_RC1724316D10_RTRMADP_2_NUTRIEN-POTASH-1024x1024.jpg"
                className={s.ava}
                alt="dialogAva"/>,
            id: '5',
            name: 'Olya'
        },
        {
            photo: <img src="https://wallbox.ru/resize/1024x1024/wallpapers/main/201617/c06a013e607fde9.jpg"
                        className={s.ava}
                        alt="dialogAva"/>,
            id: '6',
            name: 'Masha'
        }],

    messages: [
        {id: '1', message: 'Hi!'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Whats up?!'},
        {id: '4', message: 'Wanna eat?'},
        {id: '5', message: 'Ok'},
        {id: '6', message: 'Yo'}],

    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: '7',
                message: state.newMessageText
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }

};

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, newText: text
    }
};

export default dialogsReducer;