import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/Styles/Container/Container.module.scss'
import {Skill} from "./Skill/Skill";
import {Title} from "../common/Components/Title/Title";



function Skills () {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill title = {"HTML"} description = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit...."}/>
                    <Skill title = {"JS"} description = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed ut perspiciatis unde omnis iste"}/>
                    <Skill title = {"React"} description = {"Natus error sit voluptatem accusantium doloremque laudantium."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
