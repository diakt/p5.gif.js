import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Nav } from '../components'

const App = ({ children }) => {
  return (
      <div className="App">
        <header>
          <h2>Layout</h2>
        </header>
        <Nav />
        <div className="Containers">{ children }</div>
        <footer>
            2016
        </footer>
      </div>
  )
};

export default App;
