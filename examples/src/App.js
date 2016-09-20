import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import p5 from 'p5'
import sketch from './sketch'
import GIF from 'gif.js'
import p5gif from 'p5.gif.js'

class App extends Component {
  componentDidMount() {
    console.log(GIF)
    console.log(p5gif)
    console.log(p5)
    new p5(sketch, this.refs.sketch);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Hell</h2>
        </div>
        <div id="sketch" ref="sketch" />
      </div>
    );
  }
}

export default App;
