import s from './Menu.module.scss';

import { NavLink } from 'react-router-dom';

import {menu} from './menu.json'


export default function Menu() {

    const menuList = menu.map((m, i) => {
        return (
            <li key={i}
                className={s[`${m.classMenu}`]}>
                    <NavLink
                        to={m.to} exact>
                        {m.name}
                    </NavLink>

            </li>
        )
    })




    return (
        <div className={s.menuContainer}>
            <ul className={s.list}>
                {menuList}
            </ul>
        </div>
    )
}
