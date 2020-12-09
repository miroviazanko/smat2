import React, {useState, useEffect} from "react";
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Intro from './Intro';
import Steel from './Steel';
import Rubber from './Rubber';




function App() {

  const [isHash, setIsHash] = useState(-1)

  const hash = window.location.href.indexOf('#');


  useEffect(() => {
    const hash = window.location.href.indexOf('#');
    setIsHash(hash)
    console.log('render');
  });


  const handleOptionClick = (data) => {
    const hash = window.location.href.indexOf('#');
    setIsHash(hash)
    console.log('rend', hash);
  }



  return (
    <div className="App">

      { isHash === -1 ? <Intro onClick={ () => handleOptionClick()}/> : null }

      <Switch>

        <Route path="/konstrukcie"
               component={Steel}
               />

        <Route path="/guma"
               component={Rubber} />

      </Switch>

    </div>
  );
}

export default App;
