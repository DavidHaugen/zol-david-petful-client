import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import LandingPage from './components/landing-page';
import PetsPage from './components/pets-page';
import petsContext from './context-pets'
import queue from './usersQueue';

class App extends Component {
  static contextType = petsContext;
  componentDidMount(){
    const usersQueue = new queue();
    const users = this.context.users;

    users.forEach(user => {
      usersQueue.enqueue(user);
    })
    
    this.context.setUserQueue(usersQueue);

    fetch('https://petfulzoldavid.herokuapp.com/api/dog')
      .then(res => res.json())
      .then(dogs => this.context.setDogs(dogs));

    fetch('https://petfulzoldavid.herokuapp.com/api/cat')
      .then(res => res.json())
      .then(cats => this.context.setCats(cats));  
  }
  

  render() {
    return (
      <div className="App">
         <header><h1>Petful</h1></header>
         <div>
           <Route exact path='/' component={LandingPage}/>
           <Route path='/pets' component={PetsPage}/>
         </div>
      </div>
    );
  }
}

export default App;
