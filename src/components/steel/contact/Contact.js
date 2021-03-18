import s from './Contact.module.scss';

import { AiOutlinePhone } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { ImFacebook2 } from 'react-icons/im';

export default function Contact() {
    return (
        <div className='sectionContainer'>
            <div className={s.smallContainer}>
                <div>
                    <a href="tel:+421 948 226 850">
                    <AiOutlinePhone fill="#62a460" size="28" className={s.phoneIcon}/> <p className={s.phoneNumber}>+421 948 226 850 </p>
                    </a>
                </div>
                <div>
                    <a href="mailto:smatpresov@gmail.com">
                        <FiMail stroke="#b03200" size="28" className={s.emailIcon}/><p className={s.email}>smatpresov@gmail.com</p>
                    </a>
                </div>
                <div>
                    <a href="https://www.facebook.com/SMATPO" target="_blank" rel="noreferrer">
                    <ImFacebook2 fill="#1877f2" size="28" className={s.facebookIcon}/><p className={s.facebook}>acebook</p>
                    </a>
                </div>

                    <h3>Výroba</h3>
                        <p>
                            SMAT s.r.o. <br />
                            Pod hájom 10 <br />
                            Ľubotice 08006
                        </p>

                <h3>Fakturačné údaje</h3>
                        <p>
                            SMAT s.r.o. <br />
                            Strážnická 8817/19 <br />
                            080 06 Prešov 6 <br /><br />
                            IČO: 53050339 <br />
                            DIČ: 2121240880 <br />
                            IČ DPH: SK2121240880 <br />
                        </p>
                        <p>Zápis v ORSR: Obchodný register Okresného súdu Prešov, oddiel: Sro, vložka č.40196/P</p>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.0376903150923!2d21.27208300453488!3d49.009867916752306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDAwJzM0LjYiTiAyMcKwMTYnMTIuNyJF!5e0!3m2!1ssk!2ssk!4v1607933766579!5m2!1ssk!2ssk" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title="Mapa" className={s.map}>

                </iframe>
            </div>
        </div>
    )
}
