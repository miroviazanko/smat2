import React, {useState, useEffect} from "react";
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Intro from './Intro';
import Steel from './Steel';
import Rubber from './Rubber';




function App() {

  const [startUrl, setStartUrl] = useState(true)

  const findOutUrl = () => {
    const hash = window.location.href.indexOf('konstrukcie')
    const hash2 = window.location.href.indexOf('guma');
    console.log(hash);
    if (hash !== -1 || hash2 !== -1) {
      setStartUrl(false)
    } else setStartUrl(true)
  }


  useEffect(() => {
    findOutUrl()
  },[startUrl]);


  const handleOptionClick = () => {
    findOutUrl()
  }

  const unMountedComp = (data) => {
    setStartUrl(data)
  }


  return (
    <div className="App">

      { startUrl === true ? <Intro onClick={ () => handleOptionClick()}/> : null }



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
