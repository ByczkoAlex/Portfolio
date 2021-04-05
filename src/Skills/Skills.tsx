import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/Styles/Container/Container.module.scss'
import {Skill} from "./Skill/Skill";
import {Title} from "../common/Components/Title/Title";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



function Skills () {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <div>
                    <Title text={"Skills"}/>
                </div>
                <div className={style.skills}>
                    <Skill icon={<FontAwesomeIcon icon={faReact}/>} title = {"HTML"} description = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit...."}/>
                    <Skill icon={<FontAwesomeIcon icon={faReact}/>} title = {"JS"} description = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed ut perspiciatis unde omnis iste"}/>
                    <Skill icon={<FontAwesomeIcon icon={faReact}/>} title = {"React"} description = {"Natus error sit voluptatem accusantium doloremque laudantium."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
