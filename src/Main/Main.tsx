import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/Styles/Container/Container.module.scss';
import MeImg from '../assets/img/me.jpg'
import Particles from "react-particles-js";
// @ts-ignore
import ReactTypingEffect from 'react-typing-effect';

const particlesOpt = {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        }
    }
}

function Main() {
    return (
        <div id={"1"} className={style.MainBlock}>
            <Particles className={style.particles} params={particlesOpt}/>
                <div className={styleContainer.container}>
                    <div className={style.text}>
                        <span className={style.span}>Hi There</span>
                        <h1 className={style.name}>I am <ReactTypingEffect speed={70} eraseSpeed={70} eraseDelay={2300} typingDelay={2300}
                                text={[" Alex Bytsko", " Frontend developer"]}
                            />
                        </h1>
                    </div>
                    <div className={style.photoBlock}>
                        <img className={style.photo} src={MeImg} alt="it's me"/>
                    </div>
                </div>
        </div>
    );
}

export default Main;
