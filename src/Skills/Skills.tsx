import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/Styles/Container/Container.module.scss'
import {Skill} from "./Skill/Skill";
import {Title} from "../common/Components/Title/Title";
import {faHtml5, faJs, faReact} from "@fortawesome/free-brands-svg-icons";
// @ts-ignore
import Fade from 'react-reveal/Fade';

function Skills() {
    return (

        <div id={"2"} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Fade>
                    <div>
                        <Title text={"Skills"}/>
                    </div>
                    <div className={style.skills}>
                        <Skill icon={faHtml5} title={"HTML"}
                               description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit...."}/>
                        <Skill icon={faJs} title={"JS"}
                               description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed ut perspiciatis unde omnis iste"}/>
                        <Skill icon={faReact} title={"React"}
                               description={"Natus error sit voluptatem accusantium doloremque laudantium."}/>
                    </div>
                </Fade>
            </div>
        </div>

    );
}

export default Skills;
