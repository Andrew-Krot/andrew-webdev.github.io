import React from 'react';
import s from "../components/Friends/FriendItem/FriendItem.module.css";

let initialState = {
    friends: [
        {
            photo: <img src="https://i.pinimg.com/originals/0f/6f/8d/0f6f8d6b12e35404713b9fed2211272e.jpg"
                        className={s.ava}
                        alt="friendAva"/>,
            id: '1',
            name: 'Shrek'
        },
        {
            photo: <img src="http://ae01.alicdn.com/kf/HTB1ovyJmdnJ8KJjSszdq6yxuFXaN.jpg_q50.jpg"
                        className={s.ava}
                        alt="friendAva"/>,
            id: '2',
            name: 'Donkey'
        },
        {
            photo: <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNiwaJ0VThFsgoZXssynZCq_0F7HBpYMEnlHJAfWZ096bfTRVu"
                className={s.ava}
                alt="friendAva"/>,
            id: '3',
            name: 'Cat'
        },
        {
            photo: <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjtstjHR3ja_ZCPDVgdqESHjXtvf8sD53BW4quYrwpNwGOIyiQ"
                className={s.ava}
                alt="freindAva"/>,
            id: '4',
            name: 'Dragon'
        },
        {
            photo: <img
                src="https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/king-harold-shrek-2-0.78.jpg"
                className={s.ava}
                alt="friendAva"/>,
            id: '5',
            name: 'King'
        },
        {
            photo: <img
                src="https://banner2.kisspng.com/20180526/bxf/kisspng-princess-fiona-shrek-the-musical-donkey-lord-farqu-shrek-fiona-5b0964b76262a2.502245881527342263403.jpg"
                className={s.ava}
                alt="friendAva"/>,
            id: '6',
            name: 'Fiona'
        }
    ]
};

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;