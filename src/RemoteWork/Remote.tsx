import React from 'react';
import style from './RemoteWork.module.css';
import s from '../common/Styles/Container/Container.module.scss';


function RemoteWork() {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${style.container} ${style.remoteWorksContainer}`}>
                <h3 className={style.title}>considering options for remote work</h3>
                <button className={s.btn}>hire me</button>
            </div>
        </div>
    );
}

export default RemoteWork;
