import React from 'react';
import style from './Contacts.module.css';
import s from '../common/Styles/Container/Container.module.scss';


function Contacts() {
    return (
        <div className={style.color}>
            <div className={`${s.container} ${style.contactsBlock}`}>
                <div>
                    <h2 className={style.title}>Contacts</h2>
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
