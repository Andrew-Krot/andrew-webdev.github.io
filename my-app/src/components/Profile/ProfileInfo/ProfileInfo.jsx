import React from 'react';
import s from './ProfileInfo.module.css';
import beach from "../../../img/beach.jpg";

const ProfileInfo = () => {
    return <div>
            <img src={beach} alt="beach"/>
        <div className={s.descriptionBlock}> ava + description </div>
        </div>
}

export default ProfileInfo;