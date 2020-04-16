import React from 'react';
import logo from './logo.svg';
import './App.css';

import FormularioExistencias from './components/formularioexistencias.component';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormularioExistencias />
      </header>
    </div>
  );
}

;

export default App;
