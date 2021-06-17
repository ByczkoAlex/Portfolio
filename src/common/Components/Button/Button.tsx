import style from "./Button.module.scss";
import React from "react";

type ButtonPropsType = {
    buttonText:string
}

export const Button = (props: ButtonPropsType) => {
    return <a href=''  className={style.btn}>{props.buttonText}</a>
}

