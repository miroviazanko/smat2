import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import s from './Steel.module.scss';

import Logo from './components/logo/Logo';
import Menu from './components/menu/Menu';
import Introduction from './components/introduction/Introduction';
import Main from './components/main/Main';
import OurServices from './components/ourservices/OurServices';
import Contact from './components/contact/Contact';




export default function Steel(props) {

    useEffect(() => {
        return () => {
            props.unMount(-1)
        }
    })

    return (

        <div className={s.steelContainer}>
            <Logo />

            <Route render={({ location }) => (
                <>
                    <Menu />
                    <Introduction />


                        <TransitionGroup>
                            <CSSTransition
                                timeout={1000}
                                classNames='fade'
                                key={location.pathname.split('/')[1]}>


                            <Switch location={location}>

                                <Route path="/konstrukcie/" exact
                                       component={Main} />
                                <Route path="/konstrukcie/services"
                                       component={OurServices} />
                                <Route path="/konstrukcie/contact"
                                       component={Contact} />

                            </Switch>

                        </CSSTransition>
                    </TransitionGroup>


                </>

            )} />
        </div>

    )
}
