import React from 'react';
import style from './Nav.module.scss';

function Nav() {
    return (
        <div className={style.Nav}>
            <ul className={style.textBlock}>
                <li className={`${style.text} ${style.active}`}><a href="#">Main</a></li>
                <li className={style.text}><a href="#">Skills</a></li>
                <li className={style.text}><a href="#">Works</a></li>
                <li className={style.text}><a href="#">Contacts</a></li>
            </ul>
        </div>
    );
}

export default Nav;
