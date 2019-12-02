import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, sendMessage, updateNewMessageText, updateNewPostText} from "./redux/state";

export let rerenderEntireTree = (state) => {

    ReactDOM.render(<App state={state}
                         addPost={addPost}
                         sendMessage={sendMessage}
                         updateNewMessageText={updateNewMessageText}
                         updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
};