import React, {Component} from 'react';
import petsContext from '../context-pets'
import './pets.css'

export default class PetsPage extends Component {
  static contextType = petsContext

  state = {
    count: null
  }

  adoptDog = () => {
    fetch('https://petfulzoldavid.herokuapp.com/api/dog', 
    {
      method: 'delete'
    })
    .then(res => res.json())
    .then(res => {
      this.context.adoptDog();
      // this.context.cycleUser();
      const queue = this.context.userQueue;
      queue.enqueue(queue.dequeue());
    })
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
      // this.context.cycleUser();
      const queue = this.context.userQueue;
      queue.enqueue(queue.dequeue());
    })
    .catch(err => this.context.setError(err))
  }

  componentDidMount(){
    setInterval(() => {
        // this.context.cycleUser()
        const queue = this.context.userQueue;
        queue.enqueue(queue.dequeue());
        this.userPosition()
    }, 3000);
  }

  userPosition = () => {
    const queue = this.context.userQueue;

    if(queue.first === null){
      return [];
    }
    let curr = queue.first 
    let count = 1;
    while(curr.value !== "YOU"){
      count++;
      curr = curr.next;
    }
    this.setState({count});
  }

  renderPetInfo = (pet) => {
    return (
    <>
      <p>Description of the pet: {pet.imageDescription}</p>
      <p>Name: {pet.name}</p>
      <p>Sex: {pet.sex}</p>
      <p>Age: {pet.age}</p>
      <p>Breed: {pet.breed}</p>
      <p>Story: {pet.story}</p>
    </>
    )
  }

    render(){
      let first = this.context.userQueue !== null ? this.context.userQueue.first.value : '';
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
                  {currentCat !== undefined && this.renderPetInfo(currentCat)}
                  {first === 'YOU' ? enabledCatButton : disabledCatButton}
                </div>
                <div className="dogs">
                  <h1>Adopt this dog</h1>
                  <img className="petPic" src={currentDog ? currentDog.imageURL : null} alt="dog"/>
                  {currentDog !== undefined && this.renderPetInfo(currentDog)}
                  {first === 'YOU' ? enabledDogButton : disabledDogButton}
                </div>
              </div>
              <div className="users">
                <div>{this.context.userQueue !== null && this.context.userQueue.first.value} is currently first in line for adopting a pet.</div>
                <div>You are {this.state.count} in line.</div>
              </div>
            </div>
        )
    }
}