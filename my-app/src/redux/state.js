import React from 'react';
import s from '../components/Friends/FriendItem/FriendItem.module.css';

let state = {
    profilePage: {
        posts: [{id: '1', message: 'Hello! How are you?', likeCount: '20'},
            {id: '2', message: "It's my first post", likeCount: '24'}
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Dimych'},
            {id: '2', name: 'Andrew'},
            {id: '3', name: 'Lena'},
            {id: '4', name: 'Marina'},
            {id: '5', name: 'Olya'},
            {id: '6', name: 'Masha'}],
        messages: [
            {id: '1', message: 'Hi!'},
            {id: '2', message: 'How are you?'},
            {id: '3', message: 'Whats up?!'},
            {id: '4', message: 'Wanna eat?'},
            {id: '5', message: 'Ok'},
            {id: '6', message: 'Yo'}]
    },

    sideBar: {
        friends: [
            {
                photo: <img className={s.ava}
                            src="https://i.pinimg.com/originals/0f/6f/8d/0f6f8d6b12e35404713b9fed2211272e.jpg"
                            alt="friendAva"/>,
                id: '1',
                name: 'Shrek'
            },
            {
                photo: <img className={s.ava} src="http://ae01.alicdn.com/kf/HTB1ovyJmdnJ8KJjSszdq6yxuFXaN.jpg_q50.jpg"
                            alt="friendAva"/>,
                id: '2',
                name: 'Donkey'
            },
            {
                photo: <img className={s.ava}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNiwaJ0VThFsgoZXssynZCq_0F7HBpYMEnlHJAfWZ096bfTRVu"
                            alt="friendAva"/>,
                id: '3',
                name: 'Cat'
            },
            {
                photo: <img className={s.ava}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjtstjHR3ja_ZCPDVgdqESHjXtvf8sD53BW4quYrwpNwGOIyiQ"
                            alt="freindAva"/>,
                id: '4',
                name: 'Dragon'
            },
            {
                photo: <img className={s.ava}
                            src="https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/king-harold-shrek-2-0.78.jpg"
                            alt="friendAva"/>,
                id: '5',
                name: 'King'
            },
            {
                photo: <img className={s.ava}
                            src="https://banner2.kisspng.com/20180526/bxf/kisspng-princess-fiona-shrek-the-musical-donkey-lord-farqu-shrek-fiona-5b0964b76262a2.502245881527342263403.jpg"
                            alt="friendAva"/>,
                id: '6',
                name: 'Fiona'
            }
        ]
    }
};

export default state;
