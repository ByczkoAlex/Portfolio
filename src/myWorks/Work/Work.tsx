import React, {CSSProperties} from 'react';
import style from './Work.module.scss';
import {Button} from "../../common/Components/Button/Button";

type PropsType = {
    title: string
    description: string
    style : CSSProperties
    buttonText:string
}

export function Work(props : PropsType) {
    return (
        <div className={style.work}>
            <div className={style.image} style={props.style}>
                <Button  buttonText={props.buttonText} />
            </div>
            <div className={style.description}>
                <h2 className={style.title}>{props.title}</h2>
                <span className={style.text}>{props.description}</span>
            </div>
        </div>
    );
}
