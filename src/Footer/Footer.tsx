import React from 'react';
import style from './Footer.module.scss';
import s from "../common/Styles/Container/Container.module.scss";
import {Title} from "../common/Components/Title/Title";


function Footer() {
    return (
        <div className={style.color}>
            <div className={`${s.container} ${style.footerBlock}`}>
                <div>
                    <Title text={'Bytsko Alex'}/>
                </div>
                <div className={style.block}>
                    block
                </div>
                <div className={style.text}>
                    © 2020 Все права защищены
                </div>
            </div>
        </div>
    );
}

export default Footer;
