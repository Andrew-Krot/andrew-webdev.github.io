import React from 'react';
import s from '../components/Friends/FriendItem/FriendItem.module.css';
import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [{id: '1', message: 'Hello! How are you?', likeCount: '20'},
            {id: '2', message: "It's my first post", likeCount: '24'}
        ]
    },

    dialogsPage: {
        dialogs: [
            {
                photo: <img className={s.ava}
                            src="https://himflax.com/wp-content/uploads/2019/08/React-Native%E2%80%94Future-of-Hybrid-App-Development-post-01-1024x1024.jpg"
                            alt="dialogAva"/>,
                id: '1',
                name: 'Dimych'
            },
            {
                photo: <img className={s.ava}
                            src="https://uhdwallpapers.org/uploads/converted/19/08/03/huawei-mediapad-m6-stock-wallpaper-1024x1024_666874-mm-90.jpg"
                            alt="dialogAva"/>,
                id: '2',
                name: 'Andrew'
            },
            {
                photo: <img className={s.ava}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkE7p3KNyZIWzerh5gU_qigzTsDV9uOQFeUn-sImafTM89Pl2R"
                            alt="dialogAva"/>,
                id: '3',
                name: 'Lena'
            },
            {
                photo: <img className={s.ava}
                            src="https://naked-science.ru/wp-content/uploads/2018/12/field_image_moon1-1024x1024.jpg"
                            alt="dialogAva"/>,
                id: '4',
                name: 'Marina'
            },
            {
                photo: <img className={s.ava}
                            src="https://www.fertilizerdaily.ru/wp-content/uploads/2019/11/2019-08-13T015706Z_1557258821_RC1724316D10_RTRMADP_2_NUTRIEN-POTASH-1024x1024.jpg"
                            alt="dialogAva"/>,
                id: '5',
                name: 'Olya'
            },
            {
                photo: <img className={s.ava}
                            src="https://wallbox.ru/resize/1024x1024/wallpapers/main/201617/c06a013e607fde9.jpg"
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

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    };

    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state);
};


export default state;