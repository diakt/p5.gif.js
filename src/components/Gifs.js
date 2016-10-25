import React, { PropTypes, Component } from 'react'
import { Button, Carousel } from 'react-bootstrap'
import './Gifs.css'

const Gifs = React.createClass({

  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },

  handleSelect(selectedIndex, e) {
    console.log('selected=' + selectedIndex + ', direction=' + e.direction);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  },

	render () {
		let {gifList} = this.props;
		gifList = this.breakArray(gifList, 5);

	    return (
			<div className="carousel-container">
				<Carousel activeIndex={this.state.index} direction={this.state.direction}>
					{gifList.map((gifItems, i) => {
		            	return (
		            		<Carousel.Item key={i}>
			            	 	{gifItems.map((gif, j) => 
									<div className="img-crop" key={j}>
						          		<img height={100} alt="" src={gif.images.fixed_height_small_still.url} />
						          	</div>
			            		)}
		            		</Carousel.Item>
		            	)
		            })}
			    </Carousel>				
			</div>
	    )
	},

	breakArray(arr, n) {
		let result = [];
		for (let i = 0; i < arr.length; i+=n) {
			result.push([]);
			for (let j = 0; j < n; j++) {
				result[result.length - 1].push(arr[i + j]);
			}
		}
		return result;
	}
});

Gifs.propTypes = {
    gifList: PropTypes.array.isRequired
};

export default Gifs;
