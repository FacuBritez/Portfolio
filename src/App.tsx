import React from 'react';
import './App.sass';

import Aside from './Components/Aside';
import Banner from './Components/Banner';
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';
import Proyectos from './Components/Proyectos/Proyectos';
import Skills from './Components/Skills';
import SobreMi from './Components/SobreMi';
import Up from './Components/Up';


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2 fixed-md shadow">
            <Aside />
          </div>

          {/*Ocupa el espacio del div anterior por el fixed*/}
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-2">
          </div>

          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-10 padding-none">
            <Banner />
            <SobreMi />
            <Proyectos />
            <Skills />
            <Contacto />
            <Footer />
            <Up />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
