import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import ClassComp from './components/classComp'
function App() {
  return (
    <div className="App">
      <Welcome name='محمد'>
        <p>اخر ظهور لك امس</p>
      </Welcome>
      <ClassComp name='Ahmed' />
      <Welcome name='فرج' />
      <Welcome name='عصمت' />
    </div>
  );
}

export default App;
