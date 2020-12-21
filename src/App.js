import React, {useState, useEffect} from "react";
import { Routes, Route } from 'react-router-dom';

import './App.scss';

import Intro from './Intro';
import Steel from './Steel';
import Rubber from './Rubber';
import Main from './components/steel/main/Main';
import OurServices from './components/steel/ourservices/OurServices';
import Contact from './components/steel/contact/Contact';
import MainRubber from './components/rubber/main/Main';
import OurServicesRubber from './components/rubber/ourservices/OurServices';
import ContactRubber from './components/rubber/contact/Contact';


function App() {

  const [startUrl, setStartUrl] = useState(true)

  const findOutUrl = () => {
    const hash = window.location.href.indexOf('konstrukcie')
    const hash2 = window.location.href.indexOf('guma');

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

      { startUrl === true ?
              <Intro onClick={ () => handleOptionClick()}/>
      : null }


              <Routes>

                  <Route path="konstrukcie"
                        element={ <Steel unMount={ () => unMountedComp()}  />  }>

                                <Route path="/"
                                      element={<Main/>} />

                                <Route path="services"
                                      element={<OurServices />} />

                                <Route path="contact"
                                        element={<Contact /> } />
                  </Route>


                  <Route path="gumarenske-vyrobky"
                        element={ <Rubber unMount={ () => unMountedComp()}  />  }>

                              <Route path="/"
                                    element={<MainRubber />} />
                              <Route path="services"
                                    element={<OurServicesRubber />} />
                              <Route path="contact"
                                    element={<ContactRubber />} />
                  </Route>


              </Routes>

    </div>
  );
}

export default App;
