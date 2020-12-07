import s from './Logo.module.scss';

import logo300 from '../../assets/logo/logo300-nohand.png';
import hand from '../../assets/logo/hand300-exp.png';

export default function Logo() {
    return(
        <div className={s.logoContainer}>

                <div className={s.logoSmallContainer}>
                    <img src={logo300} alt="logo strojarska vyroba, konstrukcia" className={s.logoNoHand} />
                <img src={hand} alt="logo strojarska vyroba, konstrukcia" className={s.hand} />
            </div>

        </div>
    )
}
