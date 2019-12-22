import React from 'react';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {

        profilePage: {
            posts: [{id: '1', message: 'Hello! How are you?', likeCount: '20'},
                {id: '2', message: "It's my first post", likeCount: '24'}
            ],

            newPostText: ''
        },

        dialogsPage: {
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
        },

        sideBar: {
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
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }

};


export default store;

window.store = store;