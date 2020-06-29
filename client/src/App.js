import React from 'react';
import Header from './components/header/header.component';
import ControlPanel from './components/control-panel/control-panel.component';
import Cards from './components/cards/cards.component';

//import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ControlPanel />
      <Cards />
    </div>
  );
}

export default App;
