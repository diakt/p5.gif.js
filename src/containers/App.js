import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Navigation } from '../components'

const App = ({ children }) => {
  return (
      <div className="App">
        <header>
          <h2>Layout</h2>
        </header>
        <Navigation />
        <div className="Containers">{ children }</div>
        <footer>
            2016
        </footer>
      </div>
  )
};

export default App;
