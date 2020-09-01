import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import ClassComp from './components/classComp'
function App() {
  return (
    <div className="App">
      <ClassComp name='Faraj' />
      <Welcome name="Esmat" />
    </div>
  );
}

export default App;
