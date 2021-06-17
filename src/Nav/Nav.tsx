import React from 'react';
import style from './Nav.module.scss';

function Nav() {
    return (
        <div className={style.Nav}>
            <ul className={style.textBlock}>
                <li className={`${style.text} ${style.active}`}><a href="#1">Main</a></li>
                <li className={style.text}><a href="#2">Skills</a></li>
                <li className={style.text}><a href="#3">Works</a></li>
                <li className={style.text}><a href="#4">Contacts</a></li>
            </ul>
        </div>
    );
}

export default Nav;
