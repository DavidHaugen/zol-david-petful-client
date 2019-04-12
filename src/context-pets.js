import React, {Component} from 'react';

const PetsContext = React.createContext({
    dogs: [],
    cats: [],
    users: [],
    user: '',
    error: null,
    userQueue: null,

    setDogs: () => {},
    setCats: () => {},
    setError: () => {},
    clearError: () => {},
    adoptDog: () => {},
    cycleUser: () => {},
    adoptCat: () => {},
    setUserQueue: () => {}
})

export default PetsContext;

export class PetsProvider extends Component{
    state = {
        dogs: [],
        cats: [],
        users: ['Zol', 'David', 'YOU', 'Drew', 'Thinkful'],
        userQueue: null,
        user: 'YOU',
        error: null
    }

    setDogs = (dogs) => {
        this.setState({dogs})
    }

    setCats = (cats) => {
        this.setState({cats})
    }

    setUsers = (users) => {
        this.setState(users)
    }

    setError = (error) => {
        this.setState({error})
    }

    clearError = ()=>{
        this.setError(null)
    }

    adoptDog = () => {
      let dogs = this.state.dogs.slice(1);
      this.setState({dogs})
    }

    cycleUser = () => {
      let users = this.state.users.slice();
      users.push(users.shift());
      this.setState({users})
    }

    adoptCat = () => {
      let cats = this.state.cats.slice(1);
      this.setState({cats})
    }

    setUserQueue = (userQueue) =>{
        this.setState({userQueue})
    }



    render(){
        const contextValue = {
            dogs: this.state.dogs,
            cats: this.state.cats,
            users: this.state.users,
            user: this.state.user,
            error: this.state.error,
            userQueue: this.state.userQueue,

            setDogs: this.setDogs,
            setCats: this.setCats,
            setError: this.setError,
            clearError: this.clearError,
            adoptDog: this.adoptDog,
            cycleUser: this.cycleUser,
            adoptCat: this.adoptCat,
            setUserQueue: this.setUserQueue
        }
        return (
            <PetsContext.Provider value={contextValue}>
                {this.props.children}
            </PetsContext.Provider>
        )
    }
} 

