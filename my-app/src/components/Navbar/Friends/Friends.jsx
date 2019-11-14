import React from 'react';
import s from './Friends.module.css';


const Friends = () => {
    return (
        <div>
            <div className={s.items}>
                <div className={s.item}>
                    <img src="https://i.pinimg.com/originals/0f/6f/8d/0f6f8d6b12e35404713b9fed2211272e.jpg"
                         alt="friendAva"/>
                    <p>Shrek</p>
                </div>
                <div className={s.item}>
                    <img src="http://ae01.alicdn.com/kf/HTB1ovyJmdnJ8KJjSszdq6yxuFXaN.jpg_q50.jpg" alt="friendAva"/>
                    <p>Donkey</p>
                </div>
                <div className={s.item}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNiwaJ0VThFsgoZXssynZCq_0F7HBpYMEnlHJAfWZ096bfTRVu"
                        alt="friendAva"/>
                    <p>Cat</p>
                </div>
            </div>


            <div className={s.items}>
                <div className={s.item}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjtstjHR3ja_ZCPDVgdqESHjXtvf8sD53BW4quYrwpNwGOIyiQ"
                        alt="friendAva"/>
                    <p>Dragon</p>
                </div>
                <div className={s.item}>
                    <img
                        src="https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/king-harold-shrek-2-0.78.jpg"/>
                    <p>King</p>
                </div>
                <div className={s.item}>
                    <img
                        src="https://banner2.kisspng.com/20180526/bxf/kisspng-princess-fiona-shrek-the-musical-donkey-lord-farqu-shrek-fiona-5b0964b76262a2.502245881527342263403.jpg"
                        alt="friendAva"/>
                    <p>Fiona</p>
                </div>
            </div>
        </div>
    )
}

export default Friends;