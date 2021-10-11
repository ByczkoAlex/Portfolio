import React from 'react'
import style from './MyWorks.module.scss'
import MyWorksContainer from '../common/Styles/Container/Container.module.scss'
import {Work} from './Work/Work'
import {Title} from '../common/Components/Title/Title'
import socialImg from '../assets/img/social.jpg'
import todoListImg from '../assets/img/todo.png'
import Snake from '../assets/img/snake.png'
import Cinema from '../assets/img/cinema.jpg'
import Treasure from '../assets/img/treasure.jpg'
import Homework from '../assets/img/HW.png'
import Practice from '../assets/img/HW.png'
// @ts-ignore
import Fade from 'react-reveal/Fade';

function MyWorks() {
    const social = {
        backgroundImage: `url(${socialImg})`
    }
    const todoList = {
        backgroundImage: `url(${todoListImg})`
    }
    const snake = {
        backgroundImage: `url(${Snake})`
    }
    const cinema = {
        backgroundImage: `url(${Cinema})`
    }
    const treasure = {
        backgroundImage: `url(${Treasure})`
    }
    const homework = {
        backgroundImage: `url(${Homework})`
    }
    const practice = {
        backgroundImage: `url(${Practice})`
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
                              description={"In this project, we used most of the capabilities of react and redux.We have included typescript. And use Axios library."}
                              buttonText={"Show"} link={"https://byczkoalex.github.io/SocialNetwork/"}/>
                        <Work style={todoList} title={"Todo List"} buttonText={"Show"} link={"https://byczkoalex.github.io/Todolist/"}
                              description={" We wrote this project during classes with a teacher. The basic features of react and redux were also used. "}/>
                        <Work style={snake} title={"Snake"} buttonText={"Show"} link={"https://byczkoalex.github.io/OnlyJS/snake2.html"}
                              description={" I started learning js with the book \"JavaScript for children. A self-instruction manual on programming\". At the end of the book I wrote a little game."}/>
                        <Work style={cinema} title={"Cinema Service"} buttonText={"Show"} link={"https://byczkoalex.github.io/Bootstrap-4/"}
                              description={" I wrote this little site while learning HTML and CSS. Here is using bootstrap 4 library. "}/>
                        <Work style={treasure} title={"Treasure"} buttonText={"Show"} link={"https://byczkoalex.github.io/OnlyJsTreasure/treasure.html"}
                              description={"I wrote this game according to the same book as \"snake\"."}/>
                        <Work style={homework} title={"HomeWorks"} buttonText={"Show"} link={"https://byczkoalex.github.io/homework/#/pre-junior"}
                              description={"These homework assignments help me remember the material. They are also universal components that can help in the future."}/>
                        <Work style={practice} title={"Movies"} buttonText={"Show"} link={"https://byczkoalex.github.io/Practice/"}
                              description={"I wrote this pet project to consolidate my skills."}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default MyWorks;
