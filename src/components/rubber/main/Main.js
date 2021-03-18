import React, {useRef, useState, useEffect} from 'react';

import s from './Main.module.scss';

import rubberGoods from '../../../assets/rubber/main/rubber-goods.png';
import rubberRoll from '../../../assets/rubber/main/rubber-roll.jpg';
import linePoint from '../../../assets/main/line-point-red.svg';
import linePoint2 from '../../../assets/main/line-point2-red.svg';

import { AiOutlineTool } from 'react-icons/ai';


export default function MainRubber() {

    const [animate1, setAnimate1] = useState();
    const [animate2, setAnimate2] = useState();

    const photoSection1 = useRef();
    const photoSection2 = useRef();

    const observerCallback = entries => {

        /*const whichElement = entries[0].target.className.search("explainPhoto1");

        if (whichElement !== -1 && entries[0].isIntersecting) {
            setAnimate1(true)
        }
        if (whichElement === -1 && entries[0].isIntersecting) {
            setAnimate2(true)
        }

        console.log(entries[0].isIntersecting);*/

        if (entries[0].isIntersecting) {
            setAnimate1(true)
        }
    }

    const observerCallback2 = entries => {
        if (entries[0].isIntersecting) {
            setAnimate2(true)
        }
    }



    useEffect( () => {

        const first = photoSection1.current;
        const second = photoSection2.current;

        const observer = new IntersectionObserver(observerCallback, {
            root: null,
            threshold: 0.75
        });
        const observer2 = new IntersectionObserver(observerCallback2, {
            root: null,
            threshold: 0.75
        });



        observer.observe(first);
        observer2.observe(second);

        return () => {
            observer.disconnect(first)
            observer2.disconnect(second)
        }
    })




    return(
        <div className="sectionContainer"
             >

           <div className={s.textContainer}>
                <h3 className={s.textHeader}>
                    SMAT s.r.o.
                </h3>
                <p className={s.text}>
                    Vyrábame rôzne výrobky pre potreby hlavne strojárskych firiem na Slovensku ale aj v Českej republike. Viac druhov výrobkov v našej výrobe predstavuje náhradu dovozov ND pre osobné a nákl. automobily (hlavne silentbloky, tesnivá a špec. výrobky).
                </p>

                <div className={s.toolContainer}>
                    <AiOutlineTool size="42" className={s.toolImg} fill="#c11515"/>
                    <p className={s.toolText}>
                        Hlavným predmetom našej činnosti je výroba produktov z lisovanej technickej gumy.
                    </p>
                </div>

                <div className={s.section2}>

                    <div ref={photoSection1}
                        className={`${s.explainPhoto1} ${animate1 ? s.animatePhotoRight : ' '}`}>
                        <img src={rubberGoods}
                            alt="Výroba výrobkov z lisovanej technickej gumy"
                            className={s.constrImg}/>
                        <img src={linePoint}
                             alt="Výroba výrobkov z lisovanej technickej gumy"
                             className={s.linePoint} />
                        <p>Rôzne gumené výrobky</p>
                    </div>

                    <div ref={photoSection2}
                        className={`${s.explainPhoto2} ${ animate2 ? s.animatePhotoLeft : ' '}`}
                         >
                        <p>Pogumované valce</p>
                        <img src={linePoint2}
                             alt="Výroba výrobkov z lisovanej technickej gumy"
                             className={s.linePoint2} />
                        <img src={rubberRoll}
                            alt="Výroba výrobkov z lisovanej technickej gumy"
                            className={s.constrImg}/>
                    </div>

                </div>

                <p className={s.aboutText}>
                    Naša firma pôsobí na trhu už od roku 1992. Našou hlavnou zásadou je už takmer 30 rokov spokojnosť zákazníkov s našou prácou. Vieme sa prispôsobiť potrebám zákazníka a vždy hľadáme spoločné riešenie. V prípade akýchkoľvek otázok nás neváhajte kontaktovať.
                </p>

           </div>

        </div>
    )

}
