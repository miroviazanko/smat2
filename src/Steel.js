import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Logo from './components/steel/logo/Logo';
import Menu from './components/steel/menu/Menu';
import Introduction from './components/steel/introduction/Introduction';
import Main from './components/steel/main/Main';
import OurServices from './components/steel/ourservices/OurServices';
import Contact from './components/steel/contact/Contact';
import Footer from './components/steel/footer/Footer';



export default function Steel(props) {

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

                                <Route path="/konstrukcie" exact
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

            <Footer />

        </>

    )
}
