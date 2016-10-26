import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './Sketch.css'
import p5 from 'p5'
import mixer from '../modules/gif-mixer'

const Sketch = React.createClass({

  componentDidMount() {
    // test
    // new p5(mixer(['/test.gif', '/test2.gif']), this.refs.mixer);
  },

  handleClick() {
    new p5(mixer(this.props.gifUrls), this.refs.mixer);
  },

  render() {
    return (
      <div className="sketch-container">
        <div className="sketch-controls">
          {this.props.gifUrls.length > 1 && <Button bsStyle="primary" onClick={this.handleClick}>Render!</Button>}
        </div>
        <div className="Sketch">
          <div ref="mixer" />
        </div>
      </div>
    );
  }
})

export default Sketch;
