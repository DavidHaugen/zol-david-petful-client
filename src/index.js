import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { PetsProvider } from './context-pets';
import './index.css';
import App from './App';


ReactDOM.render(
    <BrowserRouter>
      <PetsProvider>
        <App />
      </PetsProvider>
    </BrowserRouter>
, document.getElementById('root'));


