import s from './Introduction.module.scss';

import press from '../../../assets//rubber/intro/press-1920x517.jpg';


export default function Introduction() {
    return (
        <div className={s.introContainer}>
            <img src={press} alt="Výroba výrobkov z lisovanej technickej gumy vyroba" className={s.backgImage} />
            <h1 className={s.companyName}>SMAT s.r.o.</h1>
            <h2 className={s.introText}>Kvalitné výrobky z gumy</h2>
        </div>
    )
}
