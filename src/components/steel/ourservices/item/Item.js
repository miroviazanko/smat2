import s from './Item.module.scss'

import { VscDebugBreakpointDataUnverified } from 'react-icons/vsc'



export default function Item(props) {
    return (
        <>
            <p><VscDebugBreakpointDataUnverified size="42" fill="#5982bc" className={s.icon} />{props.text}</p>
        </>
    )
}
