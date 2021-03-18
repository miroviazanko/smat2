import s from './Footer.module.scss';

import logo from '../../../assets/logo//logo-modre-konstr-transparent.png';
import { ImFacebook2 } from 'react-icons/im';




export default function Footer() {

    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return(
        <footer className={s.footerContainer}>
            <div className={s.smallContainer}>
                <div className={s.logo}
                     onClick={ () => scrollToTop()}>
                    <img src={logo}
                        alt="strojarska vyroba, konstrukcie"
                        className={s.footerLogo} />
                </div>

                <div className={s.contact}>

                    <div className={s.address}>
                        <h3>ADRESA</h3>
                        <p>
                            SMAT s.r.o.
                            <br/>
                            Pod hájom 10
                            <br/>
                            080 06 Ľubotice
                        </p>
                    </div>

                    <div className={s.emailPhone}>
                        <h3>EMAIL A TELEFÓN</h3>
                        <p>
                            <a href="mailto:smatpresov@gmail.com">smatpresov@gmail.com
                            </a>
                            <br />
                            <br />
                            <a href="tel:+421 948 226 850">+421 948 226 850</a>
                        </p>
                    </div>

                    <div className={s.social}>
                        <h3>SOCIÁLNE SIETE</h3>
                        <p>
                            <a href="https://www.facebook.com/SMATPO" target="_blank" rel="noreferrer">
                                <ImFacebook2 />acebook
                            </a>
                            < br/>
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
            </div>

            <hr className={s.line}/>

            <div className={s.copyright}>
                <p>Copyright © 2020 SMAT s.r.o.</p>
                <p>Všetky práva vyhradené.</p>
            </div>

        </footer>
    )

}
