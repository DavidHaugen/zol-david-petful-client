import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import LandingPage from './components/landing-page';
import PetsPage from './components/pets-page';
import petsContext from './context-pets'

class App extends Component {
  static contextType = petsContext;
  componentDidMount(){
    fetch('http://localhost:8000/api/dog')
      .then(res => res.json())
      .then(dogs => this.context.setDogs(dogs));
      fetch('http://localhost:8000/api/cat')
      .then(res => res.json())
      .then(cats => this.context.setCats(cats));  }
  

  render() {
    return (
      <div className="App">
         <header>Petful</header>
         <div>
           <Route exact path='/' component={LandingPage}/>
           <Route path='/pets' component={PetsPage}/>
         </div>
      </div>
    );
  }
}

export default App;
