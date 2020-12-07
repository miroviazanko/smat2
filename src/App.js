import React, {useState} from "react";
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './App.scss';



import Logo from './components/logo/Logo';
import Menu from './components/menu/Menu';
import Introduction from './components/introduction/Introduction';
import Main from './components/main/Main';
import OurServices from './components/ourservices/OurServices';
import Contact from './components/contact/Contact';



function App() {



  return (
    <div className="App">
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

                  <Route path="/" exact
                         component={Main} />
                  <Route path="/services"
                         component={OurServices} />
                  <Route path="/contact"
                         component={Contact} />

              </Switch>
            </CSSTransition>
          </TransitionGroup>


        </>

      )} />




    </div>
  );
}

export default App;
