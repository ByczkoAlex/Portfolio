import style from "./Button.module.scss";
import React from "react";

type ButtonPropsType = {
    buttonText:string
    link:string
}

export const Button = (props: ButtonPropsType) => {
    return <a href={props.link}  className={style.btn}>{props.buttonText}</a>
}

