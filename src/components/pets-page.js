import React, {Component} from 'react';
import petsContext from '../context-pets'
import './pets.css'

export default class PetsPage extends Component {
  static contextType = petsContext

  adoptDog = () => {
    fetch('https://petfulzoldavid.herokuapp.com/api/dog', 
    {
      method: 'delete'
    })
    .then(res => res.json())
    .then(res => {
      this.context.adoptDog();
      this.context.cycleUser();})
      // this.context.users.push(this.context.users.shift());})
    .catch(err => this.context.setError(err))
  }

  adoptCat = () => {
    fetch('https://petfulzoldavid.herokuapp.com/api/cat', 
    {
      method: 'delete'
    })
    .then(res => res.json())
    .then(res => {
      this.context.adoptCat();
      this.context.cycleUser();})
      // this.context.users.push(this.context.users.shift());})
    .catch(err => this.context.setError(err))
  }

  componentDidMount(){
    setInterval(() => {
        this.context.cycleUser()
    }, 3000);
  }

    render(){
      // Hacky users implementation for now:
      const users = this.context.users

      let html = ''
      users.forEach(user => html += ` - ${user} `)
      html += ' -'

      let currentCat;
      if(this.context.cats){
        currentCat = this.context.cats[0];
      }

      let currentDog;
      if(this.context.dogs){
        currentDog = this.context.dogs[0];
      }

      let disabledCatButton = <button onClick={this.adoptCat} disabled>Adopt</button>
      let enabledCatButton = <button onClick={this.adoptCat}>Adopt</button>
      let disabledDogButton = <button onClick={this.adoptDog} disabled>Adopt</button>
      let enabledDogButton = <button onClick={this.adoptDog}>Adopt</button>
     

        return (
            <div className="main">
              <div className="flex">
                <div className="cats">
                  <h1>Adopt this cat</h1>
                  <img className="petPic" src={currentCat ? currentCat.imageURL : null} alt="cat"/>
                  {this.context.users[0] === 'YOU' ? enabledCatButton : disabledCatButton}
                </div>
                <div className="dogs">
                  <h1>Adopt this dog</h1>
                  <img className="petPic" src={currentDog ? currentDog.imageURL : null} alt="dog"/>
                  {this.context.users[0] === 'YOU' ? enabledDogButton : disabledDogButton}                </div>
              </div>
              <div className="users">
                <p>User order:</p>
                <div>{html}</div>
              </div>
            </div>
        )
    }
}