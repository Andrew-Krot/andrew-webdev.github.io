import React from 'react';
import s from './User.module.css'
import {setUsersAC} from "../../redux/users-reducer";

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: '1',
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',
                    followed: true,
                    fullName: 'Andrew',
                    status: 'I am a boss',
                    location: {country: 'Belarus', city: 'Minsk'}
                },
                {
                    id: '2',
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',
                    followed: true,
                    fullName: 'Gerda',
                    status: 'Believe in yourself',
                    location: {country: 'Poland', city: 'Wroclaw'}
                },
                {
                    id: '3',
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',
                    followed: false,
                    fullName: 'Adolf',
                    status: 'Poland is mine!!',
                    location: {country: 'Germany', city: 'Minsk'}
                },
                {
                    id: '4',
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',
                    followed: true,
                    fullName: 'Phillip',
                    status: 'Fuck you indians!',
                    location: {country: 'USA', city: 'San Jose'}
                }
            ]
        )
    }


    return <div> {
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={s.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)
    }
    </div>
};

export default Users;