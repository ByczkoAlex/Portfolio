import React from 'react';
import style from './MyWorks.module.css';
import MyWorksContainer from "../common/Styles/Container/Container.module.css";
import {Work} from "./Work/Work";


function MyWorks() {
    return (
        <div className={style.myWorkBlock}>
            <div className={`${MyWorksContainer.container} ${style.myWorksContainer}`}>
                <div className={style.title}>
                    <h2>My Works</h2>
                </div>
                <div className={style.works}>
                    <Work title={"Work 1"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit...."}/>
                    <Work title={"Work 2"}
                          description={"Natus error sit voluptatem accusantium doloremque laudantium.Natus error sit voluptatem accusantium doloremque laudantium.Natus error sit voluptatem accusantium doloremque laudantium."}/>
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
