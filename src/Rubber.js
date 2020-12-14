import React, {useEffect} from 'react';

import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Logo from './components/rubber/logo/Logo';
import Menu from './components/rubber/menu/Menu';
import Introduction from './components/rubber/introduction/Introduction';
import Main from './components/rubber/main/Main';
import OurServices from './components/rubber/ourservices/OurServices';
import Contact from './components/rubber/contact/Contact';
import Footer from './components/rubber/footer/Footer';


export default function Rubber(props) {

    useEffect(() => {
        props.unMount(false)
        return () => {
            props.unMount(true)
        }
    })

    return (
            <>
                <Logo />

                <Route render={({ location }) => (
                    <>
                        <Menu />
                        <Introduction />


                        <TransitionGroup>
                            <CSSTransition
                                timeout={1000}
                                classNames='fade'
                                key={location.pathname.split('/').join()}
                            >


                                <Switch location={location}>

                                    <Route path="/guma" exact
                                        component={Main} />
                                    <Route path="/guma/services"
                                        component={OurServices} />
                                    <Route path="/guma/contact"
                                        component={Contact} />

                                </Switch>

                            </CSSTransition>
                        </TransitionGroup>


                    </>

                )} />

                <Footer />

            </>
    )
}
