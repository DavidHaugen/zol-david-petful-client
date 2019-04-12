import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class LandingPage extends Component {
    render(){
        return (
            <div className="LandingPage">
                <div className="welcome">
                    <p>Thanks for coming to Petful! You can only adopt the next dog or cat in line, no jumping ahead! If you miss your turn, don't worry, everyone cycles through every 3 seconds.</p>
                </div>
                <button><Link to="/pets">Start</Link></button>
            </div>
        )
    }
}

