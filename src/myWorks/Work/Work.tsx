import React, {CSSProperties} from 'react';
import style from './Work.module.scss';

type PropsType = {
    title: string
    description: string
    style : CSSProperties
}

export function Work(props : PropsType) {
    return (
        <div className={style.work}>
            <div className={style.image} style={props.style}>
                <button className={style.btn}>Show</button>
            </div>
            <div className={style.description}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.text}>{props.description}</span>
            </div>
        </div>
    );
}
