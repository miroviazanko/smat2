import s from './Item.module.scss'

import { GiFlatPlatform } from 'react-icons/gi'



export default function Item(props) {
    return (
        <>
            <p><GiFlatPlatform size="42" fill="#c11515" className={s.icon} />{props.text}</p>
        </>
    )
}
