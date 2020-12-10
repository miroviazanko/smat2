import React, {useState, useEffect} from "react";
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Intro from './Intro';
import Steel from './Steel';
import Rubber from './Rubber';




function App() {

  const [isHash, setIsHash] = useState()


  useEffect(() => {
    const hash = window.location.href.indexOf('konstrukcie');
    setIsHash(hash)
  },[isHash]);


  const handleOptionClick = (data) => {
    const hash = window.location.href.indexOf('#');
    setIsHash(hash)
  }

  const unMountedComp = (data) => {
    setIsHash(data)
  }


  return (
    <div className="App">

      { isHash === -1 ? <Intro onClick={ () => handleOptionClick()}/> : null }



            <Switch>

                <Route path="/konstrukcie"
                      component={ () => <Steel unMount={ () => unMountedComp() } /> }
                    />


                <Route path="/guma"
                      component={ () => <Rubber unMount={ () => unMountedComp() } /> }
                    />

            </Switch>



    </div>
  );
}

export default App;
