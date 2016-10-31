import React, { Component, PropTypes } from 'react'
import { Button } from 'react-bootstrap'
import './Sketch.css'
import 'whatwg-fetch'
import p5 from 'p5'
import mixer, { renderBlob } from '../modules/gif-mixer'

// FIXME
import {deselectGif} from '../actions'

const Sketch = React.createClass({

  componentDidMount() {
    // test
    // new p5(mixer(['/test.gif', '/test2.gif']), this.refs.mixer);
    this.refs.mixer.addEventListener("blob-finished", this.handleBlobFinished);
    this.refs.mixer.addEventListener("blob-started", this.handleBlobStarted);
  },

  componentWillUnmount() {

  },

  handleBlobFinished(e) {
    console.log(e.detail)
    const blob = e.detail;
    var formData = new FormData();
    var filename = `blob-${Date.now()}.gif`;
    formData.append('gif-blob', blob, filename);
    
    fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(response => {

      console.log(response)
      // debugger
      this.refs.mixer.innerHTML = ''
      this.refs.result.src=`/${response.fileName}`;
      this.refs.resultUrl.href = `/${response.fileName}`;
    })
  },

  handlePlayClick() {
    this.props.play();
    this.props.deselectGif();
    new p5(mixer(this.refs.mixer, this.props.gifUrls), this.refs.mixer);
  },

  handleRenderClick() {
    this.props.render();
    renderBlob();
  },

  render() {
    const {play, record, render} = this.props;

    return (
      <div className="sketch-container">

        {this.props.gifUrls.length > 1 && 
          <div className="sketch-controls">
            <Button bsStyle="primary" onClick={this.handlePlayClick}>Play!</Button>
            <Button bsStyle="danger" onClick={this.handleRenderClick}>Render!</Button>
          </div>
        }

        <div className="Sketch">
          <div ref="mixer" id="mixer" />
          
          <a ref="resultUrl" target="_blank">
            <img ref="result" />
          </a>

        </div>
      </div>
    );
  }
})

Sketch.propTypes = {
    gifUrls: PropTypes.array.isRequired,
    play: PropTypes.func.isRequired,
    record: PropTypes.func.isRequired,
    render: PropTypes.func.isRequired,
    deselectGif: PropTypes.func.isRequired
};

export default Sketch;
