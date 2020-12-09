import React, {useEffect} from 'react';
import s from './Rubber.module.scss';



export default function Rubber(props) {

    useEffect(() => {
        return () => {
            props.unMount(-1)
        }
    })

    return (
        <>
            <div>
                Rubber
            </div>
        </>
    )
}
