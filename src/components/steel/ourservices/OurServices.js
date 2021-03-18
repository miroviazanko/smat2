import { useRef, useEffect, useState } from 'react';

import s from './OurServices.module.scss';

import constrImg from '../../../assets/services/constr.jpg';
import linePoint from '../../../assets/main/line-point.svg';
import linePoint2 from '../../../assets/main/line-point2.svg';
import multiPitch from '../../../assets/services/multiPitch.jpg';
import { FaRegHandshake } from 'react-icons/fa'

import Item from './item/Item';



export default function OurServices() {

    const [animate1, setAnimate1] = useState();
    const [animate2, setAnimate2] = useState();

    const photoSection1 = useRef();
    const photoSection2 = useRef();

    const observerCallback = entries => {
        if (entries[0].isIntersecting) {
            setAnimate1(true)
        }
    }

    const observerCallback2 = entries => {
        if (entries[0].isIntersecting) {
            setAnimate2(true)
        }
    }


    useEffect(() => {

        const first = photoSection1.current;
        const second = photoSection2.current;

        const observer = new IntersectionObserver(observerCallback, {
            root: null,
            threshold: 0.5
        });
        const observer2 = new IntersectionObserver(observerCallback2, {
            root: null,
            threshold: 0.5
        });



        observer.observe(first);
        observer2.observe(second);

        return () => {
            observer.disconnect(first)
            observer2.disconnect(second)
        }
    })





    return (
        <div className="sectionContainer">
            <div className={s.serviceContainer}>
                <Item text={"Kusová a malosériová strojárska výroba priemyselných strojov a podskupín a výroba jednotlivých strojných dielov."}/>

                <Item text={"Zvárané konštrukcie obrobky stredne veľkých rozmerov a hmotností."} />

                <section className={`${s.section} ${animate1 ? s.animatePhotoUp : ' '}`}
                         ref={photoSection1}>
                    <img src={constrImg}
                         alt="zvarane konstrukcie"
                         className={s.sectionImg} />
                    <img src={linePoint}
                         alt="zvarane konstrukcie"
                         className={s.linePoint} />
                    <p className={s.sectionText}>Dopravník pre automatické <br />posúvanie materiálu</p>
                </section>

                <Item text={"Výroba a montáž strojov a zariadení."} />
                <Item text={"Výroba a montáž posúvnych alebo krídlových brán, plotov, plotových dielcov zo železa."} />

                <section className={`${s.section2} ${animate2 ? s.animatePhotoUp : ' '}`}
                         ref={photoSection2}>
                    <p className={s.sectionText2}>Konštrukcia multifunkčného <br/>ihriska</p>
                    <img src={linePoint2}
                        alt="zvarane konstrukcie"
                        className={s.linePoint2} />
                    <img src={multiPitch}
                        alt="zvarane konstrukcie"
                        className={s.multiPitch} />
                </section>


            </div>

            <div className={s.handshakeContainer}>
                <FaRegHandshake size="72" fill="#5d6877" className={s.handshakeIcon}/>
                <p>Výrobky navrhujeme a vyrábame na základe požiadaviek našich zákazníkov. Konkrétne výrobky sú vyrábané podľa Vášho zadania alebo podľa výkresovej dokumentácie, kde zohľadňujeme aj špecifické požiadavky zákazníka.
                </p>
            </div>

        </div>
    )
}
