import React, { useEffect } from "react";
import {NavLink} from 'react-router-dom';

import s from './Intro.module.scss';


import smatSteelFrame from './assets/intro/smat-steel-1000-frame.png';
import smatSteelInside from './assets/intro/smat-steel-1000-inside.png';
import smatRubberFrame from './assets/intro/smat-rubber-1000-frame.png';
import smatRubberInside from './assets/intro/smat-rubber-1000-inside.png';

import { RiArrowRightSFill, RiArrowLeftSFill } from 'react-icons/ri';



export default function Intro(props) {

    return (
        <div className={s.introContainer}>
            <h1>SMAT s.r.o.</h1>

            <div className={s.optionContainer1}
                 onClick={props.onClick}>
                <NavLink to="/konstrukcie">
                    <h2>Výroba oceľových konštrukcií</h2>
                    <div className={s.imageSmat1}>
                        <RiArrowRightSFill size="50"
                            fill="#0090cc"
                            className={s.rightArrow}/>
                        <RiArrowLeftSFill size="50"
                            fill="#0090cc"
                            className={s.leftArrow}/>

                        <img src={smatSteelFrame}
                            alt="vyroba ocelovych konstrukcii"
                            className={s.steel1}
                        />
                        <img src={smatSteelInside}
                            alt="vyroba ocelovych konstrukcii"
                            className={s.steel2}
                        />
                    </div>
                </NavLink>
            </div>

            <div className={s.optionContainer2}
                 onClick={props.onClick}>
                <NavLink to="/guma">
                    <h2>Výroba produktov z gumy</h2>
                    <div className={s.imageSmat2}>
                        <RiArrowRightSFill size="50"
                            fill="#c11515"
                            className={s.rightArrow} />
                        <RiArrowLeftSFill size="50"
                            fill="#c11515"
                            className={s.leftArrow} />
                        <img src={smatRubberFrame}
                            alt="vyroba produktov z gumy"
                            className={s.rubber1}
                        />
                        <img src={smatRubberInside}
                            alt="vyroba produktov z gumy"
                            className={s.rubber2}
                        />
                    </div>
                </NavLink>
            </div>
            <div className={s.contacts}>

            </div>

        </div>
    )
}
