import React from 'react';
import style from './Title.module.scss';

type PropsType = {
    text: string
}

export function Title (props: PropsType) {
    return (
        <div className={style.title}>
            <h2 className={style.text}>{props.text}</h2>
        </div>
    )
}