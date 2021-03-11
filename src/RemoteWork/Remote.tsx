import React from 'react';
import style from './RemoteWork.module.scss';
import s from '../common/Styles/Container/Container.module.scss';
import {Title} from "../common/Components/Title/Title";


function RemoteWork() {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${s.container} ${style.remoteWorksContainer}`}>
                <Title text={'considering options for remote work'}/>
                <button className={s.btn}>hire me</button>
            </div>
        </div>
    );
}

export default RemoteWork;
