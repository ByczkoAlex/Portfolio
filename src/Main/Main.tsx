import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/Styles/Container/Container.module.scss';
import MeImg from '../assets/img/me.jpg'

function Main() {
    return (
        <div className={style.MainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span className={style.span}>Hi There</span>
                    <h1 className={style.name}>I am Alex Bytsko</h1>
                    <p className={style.job}>Frontend developer</p>
                </div>
                <div className={style.photo}>
                    <img src={MeImg} alt="it's me"/>
                </div>
            </div>
        </div>
    );
}

export default Main;
