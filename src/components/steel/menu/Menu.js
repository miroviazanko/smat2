import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import s from './Menu.module.scss';

import {menu} from './menu.json'

import { HiMenuAlt3 } from 'react-icons/hi';




export default function Menu() {


    const [mobileMenu, setMobileMenu] = useState(false);
    const [mobileDisplayMenuList, setMobileDisplayMenuList] = useState(true);


    const changeMenu = (data) => {
        if (data) {
            setMobileMenu(true)
            setMobileDisplayMenuList(false)
        } else {
            setMobileMenu(false)
            setMobileDisplayMenuList(true)
        }
    }

    const toggleState = (setState) => {
        setState(prevState => !prevState)
    }


    useEffect(() => {

        const checkWidth = () => {
            const mq = window.matchMedia(`(max-width: 768px)`);
            changeMenu(mq.matches)
        }

        window.addEventListener("resize", checkWidth);

        const innerW = window.innerWidth;

        changeMenu(innerW <= 768)

        return () => {
            window.removeEventListener("resize", checkWidth)
        }

    }, [])


    const menuList = menu.map((m, i) => {
        return (
            <li key={i}
                className={s[`${m.classMenu}`]}>
                    <Link to={m.to}
                          onClick={() => toggleState(setMobileDisplayMenuList)}>
                        {m.name}
                    </Link>

            </li>
        )
    })




    return (
        <div className={s.menuContainer}>
            {mobileMenu ?
                <HiMenuAlt3 className={s.menuIcon} size="42" onClick={() => toggleState(setMobileDisplayMenuList)} fill="#0090cc"/>
            : null}
            <ul className={`${s.list} ${mobileDisplayMenuList ? s.animateMenu : ' '}`}>
                {menuList}
            </ul>
        </div>
    )
}
