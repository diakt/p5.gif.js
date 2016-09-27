import logo from './logo.svg';
import './App.css';

import React from 'react'
import { Link } from 'react-router'

export default function App({ children }) {
  return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome</h2>
        </div>
        <nav>
          Links:
          {' '}
          <Link to="/">Gif</Link>
          {' '}
          <Link to="/about">About</Link>
        </nav>
        <div>{children}</div>
      </div>
  )
}
