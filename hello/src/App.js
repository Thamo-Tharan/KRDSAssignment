import React, { Component } from 'react';
import './App.css';
import Greet from './componets/Greet';
import Welcome from './componets/test'
import Hello from './componets/Hello';
import Wellcome from './componets/Wellcome';
import Count from './componets/Counter';
import Event from './componets/Event';
import Classclick from './componets/Classclick';
import Form from './componets/form';
import Testing from './componets/testing';
import Funtesting from './componets/functionaltest';
// import Classcomponet from './componets/Classcompont';
function App() {
  return (
    <div className="App">
      <Wellcome />
      <Count />
      <Event />
      <Classclick />
      <Form/>
      <Testing/>
      <Funtesting/>
{/*<Greet name='Thamotharan'/>
<Greet name='Bala'/>
<Greet name='Text'/>
<Welcome name='Thamotharan'/>
<Welcome name='Bala'/>
  <Welcome name='Text'/>*/}
    </div>
  );
}

export default App;
