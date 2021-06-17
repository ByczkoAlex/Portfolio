import React from 'react';
import style from './RemoteWork.module.scss';
import s from '../common/Styles/Container/Container.module.scss';
import {Title} from "../common/Components/Title/Title";
// @ts-ignore
import Fade from 'react-reveal/Fade';


function RemoteWork() {
    return (
        <div className={style.remoteWorkBlock}>
            <Fade>
                <div className={`${s.container} ${style.remoteWorksContainer}`}>
                    <Title text={'considering options for remote work'}/>
                    <button className={s.btn}>Hire me</button>
                </div>
            </Fade>
        </div>
    );
}

export default RemoteWork;
