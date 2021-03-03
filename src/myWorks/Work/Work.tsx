import React from 'react';
import style from './Work.module.css';

type PropsType = {
    title: string
    description: string
}

export function Work(props : PropsType) {
    return (
        <div className={style.work}>
            <div className={style.container}>
                <img src="https://source.unsplash.com/random/300x400" alt="My Work"/>
                <button className={style.btn}>Show</button>
            </div>
            <div>
                <h3>{props.title}</h3>
            </div>
            <div>
                {props.description}
            </div>
        </div>
    );
}
