import React from 'react';
import style from './Nav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";

function Nav() {
    return (
        <div className={style.Nav}>
            <div className={`${style.text} ${style.active} ${style.textBlock}`}>
                <Link
                    activeClass={style.active}
                    to="1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Main</Link>
                <Link
                    activeClass={style.active}
                    to="2"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Skills</Link>
                <Link
                    activeClass={style.active}
                    to="3"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Works</Link>
                <Link
                    activeClass={style.active}
                    to="4"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contacts</Link>
            </div>
        </div>
    );
}

export default Nav;
