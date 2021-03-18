import {Link} from 'react-router-dom';

import s from './Logo.module.scss';

import logoKonstr from '../../../assets/logo/logo-cervene-guma.jpg';

export default function Logo() {
    return(
        <div className={s.logoContainer}>

            <Link to="/">
                <div className={s.logoSmallContainer}>
                    <img src={logoKonstr} alt="Výroba výrobkov z lisovanej technickej gumy" className={s.logoNoHand} />

                </div>
            </Link>

        </div>
    )
}
