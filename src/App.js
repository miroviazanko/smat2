import React, {useState} from "react";

import './App.scss';

import Intro from './Intro';
import Steel from './Steel';
import Rubber from './Rubber';




function App() {

  const [whatPage, setWhatPage] = useState();

  return (
    <div className="App">

        <Intro />


        {/*<Steel />

        <Rubber />*/}

    </div>
  );
}

export default App;
