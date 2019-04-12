import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <header>Petful</header>
         <div>
           <Router path='/' />
           <Router path='/pets' />
         </div>
      </div>
    );
  }
}

export default App;
