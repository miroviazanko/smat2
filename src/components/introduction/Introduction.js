import s from './Introduction.module.scss';

import man from '../../assets/intro/welding-1920x517-dark.jpg';


export default function Introduction() {
    return (
        <div className={s.introContainer}>
            <img src={man} alt="strojarska vyroba" className={s.backgImage} />
            <h1 className={s.companyName}>SMAT s.r.o.</h1>
            <h2 className={s.introText}>Vdýchneme železu život</h2>
        </div>
    )
}
