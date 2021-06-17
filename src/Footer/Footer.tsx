import React from 'react';
import style from './Footer.module.scss';
import s from "../common/Styles/Container/Container.module.scss";
import {Title} from "../common/Components/Title/Title";
import {faGithub, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Footer() {
    return (
        <div className={style.color}>
            <div className={`${s.container} ${style.footerBlock}`}>
                <div>
                    <Title text={'Bytsko Alex'}/>
                </div>
                <div className={style.block}>
                    <div>
                        <a href="https://github.com/ByczkoAlex">
                            <FontAwesomeIcon icon={faGithub} className={style.icon}/>
                        </a>
                    </div>
                    <div>
                        <a href="https://t.me/crazy_Elk">
                            <FontAwesomeIcon icon={faTelegram} className={style.icon}/>
                        </a>
                    </div>
                </div>
                <div className={style.text}>
                    © 2020 Все права защищены
                </div>
            </div>
        </div>
    );
}

export default Footer;
