import style from "./Button.module.scss";
import React from "react";

type ButtonPropsType = {
    buttonText:string
}

export const Button = (props: ButtonPropsType) => {
    return <button className={style.btn}>{props.buttonText}</button>
}

