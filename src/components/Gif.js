import React, { Component } from 'react';
import p5 from 'p5'
import mixer from '../modules/gif-mixer'

class Gif extends Component {
  componentDidMount() {
    new p5(mixer, this.refs.mixer);
  }

  render() {
    return (
      <div className="Gif">
        <div ref="mixer" />
      </div>
    );
  }
}

export default Gif;
