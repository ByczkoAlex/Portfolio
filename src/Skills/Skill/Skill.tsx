import React from 'react';
import style from './Skill.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


type PropsType = {
    icon: any
    title: string
    description: string
}

export function Skill(props: PropsType) {
    return (
        <div className={style.skill}>
            <FontAwesomeIcon icon={props.icon} className={style.icon}/>
            <h2 className={style.title}>{props.title}</h2>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    );
}
