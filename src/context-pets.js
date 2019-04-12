import React, {Component} from 'react';

const PetsContext = React.createContext({
    dogs: [],
    cats: [],
    users: [],
    user: '',
    error: null,

    setDogs: () => {},
    setCats: () => {},
    setError: () => {},
    clearError: () => {}
})

export default PetsContext;

export class PetsProvider extends Component{
    state = {
        dogs: [],
        cats: [],
        users: [],
        user: '',
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
        this.setState(error)
    }

    clearError = ()=>{
        this.setError(null)
    }



    render(){
        const contextValue = {
            dogs: this.state.dogs,
            cats: this.state.cats,
            users: this.state.users,
            user: this.state.user,
            error: this.state.error,

            setDogs: this.setDogs,
            setCats: this.setCats,
            setError: this.setError,
            clearError: this.clearError
        }
        return (
            <PetsContext.Provider value={contextValue}>
                {this.props.children}
            </PetsContext.Provider>
        )
    }
} 

