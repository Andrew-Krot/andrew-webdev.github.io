import React from 'react';
import FriendItem from "./FriendItem/FriendItem";
import s from './Friends.module.css';


const Friends = (props) => {

    let friendsElements = props.state.friends.map (f => <FriendItem photo={f.photo} name={f.name} id={f.id}/>);

    return (
        <div>
            <div className={s.friendsItem}>
                {friendsElements}
            </div>
        </div>
    )
}

export default Friends;