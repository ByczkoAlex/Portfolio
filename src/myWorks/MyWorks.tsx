import React from 'react'
import style from './MyWorks.module.scss'
import MyWorksContainer from '../common/Styles/Container/Container.module.scss'
import {Work} from './Work/Work'
import {Title} from '../common/Components/Title/Title'
import socialImg from '../assets/img/social.jpg'
import todoListImg from '../assets/img/todo.png'
// @ts-ignore
import Fade from 'react-reveal/Fade';

function MyWorks() {
    const social = {
        backgroundImage: `url(${socialImg})`
    }

    const todoList = {
        backgroundImage: `url(${todoListImg})`
    }

    return (
        <div id={"3"} className={style.myWorkBlock}>
            <div className={`${MyWorksContainer.container} ${style.myWorksContainer}`}>
                <Fade>
                    <div>
                        <Title text={'My Works'}/>
                    </div>
                    <div className={style.works}>
                        <Work style={social} title={"Social Network"}
                              description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit...."}
                              buttonText={"Show"}/>
                        <Work style={todoList} title={"Todo List"} buttonText={"Show"}
                              description={"Natus error sit voluptatem accusantium doloremque laudantium.Natus error sit voluptatem accusantium doloremque laudantium.Natus error sit voluptatem accusantium doloremque laudantium."}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default MyWorks;
