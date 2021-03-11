import React from 'react';
import style from './Nav.module.scss';

function Nav() {
    return (
        <div className={style.Nav}>
            <ul className={style.textBlock}>
                <li className={style.text}><a href="#">Главная</a></li>
                <li className={style.text}><a href="#">Скилы</a></li>
                <li className={style.text}><a href="#">Проекты</a></li>
                <li className={style.text}><a href="#">Контакты</a></li>
            </ul>
        </div>
    );
}

export default Nav;
