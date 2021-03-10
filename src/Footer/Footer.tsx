import React from 'react';
import style from './Footer.module.css';
import s from "../common/Styles/Container/Container.module.scss";


function Footer() {
    return (
        <div className={style.color}>
            <div className={`${s.container} ${style.footerBlock}`}>
                <div>
                    <h2 className={style.title}>Byczko Alex</h2>
                </div>
                <div className={style.block}>
                    block
                </div>
                <div>
                    © 2020 Все права защищены
                </div>
            </div>
        </div>
    );
}

export default Footer;
