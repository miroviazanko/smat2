import {Link} from 'react-router-dom';

import s from './Logo.module.scss';

import logoKonstr from '../../../assets/logo/logo-modre-konstr.jpg';

export default function Logo() {
    return(
        <div className={s.logoContainer}>

            <Link to="/">
                <div className={s.logoSmallContainer}>
                    <img src={logoKonstr} alt="logo strojarska vyroba, konstrukcia" className={s.logoNoHand} />

                </div>
            </Link>

        </div>
    )
}
