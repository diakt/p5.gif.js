import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './Gif.css'
import p5 from 'p5'
import mixer from '../modules/gif-mixer'

const Gif = React.createClass({

  componentDidMount() {
    // test
    // new p5(mixer(['/test.gif', '/test2.gif']), this.refs.mixer);
  },

  handleClick() {
    new p5(mixer(this.props.gifUrls), this.refs.mixer);
  },

  render() {
    return (
      <div className="gif-container">
        <div className="gif-controls">
          {this.props.gifUrls.length > 1 && <Button bsStyle="primary" onClick={this.handleClick}>Render!</Button>}
        </div>
        <div className="Gif">
          <div ref="mixer" />
        </div>
      </div>
    );
  }
})

export default Gif;
