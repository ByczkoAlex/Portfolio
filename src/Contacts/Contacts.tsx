import React from 'react';
import style from './Contacts.module.scss';
import s from '../common/Styles/Container/Container.module.scss';
import {Title} from "../common/Components/Title/Title";


function Contacts() {
    return (
        <div className={style.color}>
            <div className={`${s.container} ${style.contactsBlock}`}>
                <div>
                    <Title text={'Contacts'}/>
                </div>
                <div>
                    <form className={style.form}>
                        <input type="text" placeholder="Ваше имя" className={style.input}/>
                        <input type="text" placeholder="Ваш email" className={style.input}/>
                        <textarea className={style.textarea}></textarea>
                    </form>
                </div>
                <div>
                    <button className={s.btn}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
