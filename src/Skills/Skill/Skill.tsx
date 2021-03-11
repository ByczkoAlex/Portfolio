import React from 'react';
import style from './Skill.module.scss';

type PropsType = {
    title: string
    description: string
}

export function Skill(props: PropsType) {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h2 className={style.title}>{props.title}</h2>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    );
}
