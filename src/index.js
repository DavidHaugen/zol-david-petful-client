import React from 'react';
import ReactDOM from 'react-dom';
import { PetsProvider } from './context-pets';
import './index.css';
import App from './App';


ReactDOM.render(
    <PetsProvider>
        <App />
    </PetsProvider>
, document.getElementById('root'));


