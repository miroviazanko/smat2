import React, {useRef, useState, useEffect} from 'react';

import s from './Main.module.scss';

import constrImg1 from '../../assets/main/konstr4-600.JPG';
import constrImg2 from '../../assets/main/konstr8-600.JPG';
import linePoint from '../../assets/main/line-point.svg';
import linePoint2 from '../../assets/main/line-point2.svg';

import { AiOutlineTool } from 'react-icons/ai';


export default function Main() {

    const [animate1, setAnimate1] = useState();
    const [animate2, setAnimate2] = useState();

    const photoSection1 = useRef();
    const photoSection2 = useRef();


    const observerCallback = entries => {



        const whichElement = entries[0].target.className.search("explainPhoto1");

        console.log(entries[0].isIntersecting, whichElement);

        if (whichElement !== -1 && entries[0].isIntersecting) {
            setAnimate1(true)
        }
        if (whichElement === -1 && entries[0].isIntersecting) {
            setAnimate2(true)
        }

    }

    let options = {
        threshold: 0.75
    }

    let observer = new IntersectionObserver(observerCallback, options);


    useEffect( () => {
        observer.observe(photoSection1.current);
        observer.observe(photoSection2.current);
    })




    return(
        <div className="sectionContainer">

           <div className={s.textContainer}>
                <h3 className={s.textHeader}>
                    SMAT s.r.o.
                </h3>
                <p className={s.text}>
                    Sme strojárskou spoločnosťou, ktorá poskytuje široké spektrum výroby a technologické možnosti počnúc delením materiálu, mechanické opracovanie, zváranie, povrchové úpravy, až po montáž u zákazníka.
                </p>

                <div className={s.toolContainer}>
                    <AiOutlineTool size="42" className={s.toolImg} fill="#5982bc"/>
                    <p className={s.toolText}>
                        Hlavným predmetom našej činnosti je kovovýroba, strojárska výroba a povrchová úprava kovov a výrobkov.
                    </p>
                </div>

                <section className={s.section2}>

                    <div className={`${s.explainPhoto1} ${animate1 ? s.animatePhotoRight : ' '}`}
                         ref={photoSection1}>
                        <img src={constrImg1}
                            alt="strojarska vyroba, konstrukcie"
                            className={s.constrImg}/>
                        <img src={linePoint}
                             alt="strojarska vyroba, dopravnik"
                             className={s.linePoint} />
                        <p>Navaľovací dopravník</p>
                    </div>

                    <div className={`${s.explainPhoto2} ${ animate2 ? s.animatePhotoLeft : ' '}`}
                         ref={photoSection2}>
                        <p>Dopravník</p>
                        <img src={linePoint2}
                             alt="strojarska vyroba, dopravnik"
                             className={s.linePoint2} />
                        <img src={constrImg2}
                            alt="strojarska vyroba, konstrukcie"
                            className={s.constrImg}/>
                    </div>

                </section>

                <p>
                    Naša firma pôsobí na trhu už od roku ???. Našou hlavnou zásadou je spokojnosť zákazníkov s našou pracou. Vieme sa prispôsobiť potrebám zákazníka a vždy hľadáme spoločné riešenie. Okrem štandardnej ponuky, sme schopní vyrobiť akékoľvek konštrukcie, aj atypických tvarov. V prípade akýchkoľvek otázok nás neváhajte kontaktovať.
                </p>

           </div>

        </div>
    )

}
