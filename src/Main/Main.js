import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/Styles/Container/Container.module.css';

function Main() {
    return (
        <div className={style.MainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Alex Bytsko</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={style.photo}>
                    <img src="https://source.unsplash.com/random/300x400" alt="it's me"/>
                </div>
            </div>
        </div>
    );
}

export default Main;
