import logo from './logo.svg';
import './App.css';
import React, { PropTypes } from 'react'
import { Navigation } from '../components'

const App = ({ children }) => {
  return (
      <div className="App">
        <div className="header-container">
          <header>
            <h2>Gif mixer</h2>
          </header>
          <div className="nav-container">
            <Navigation />
          </div>
        </div>
        <div className="Containers">{ children }</div>
        <footer>
            2016
        </footer>
      </div>
  )
};

App.proptypes = {
  children: PropTypes.node
}

export default App;
