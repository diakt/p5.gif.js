import React, { PropTypes, Component } from 'react'
import { Button, Carousel } from 'react-bootstrap'
import { breakArray } from '../modules/utils'
import './Gifs.css'

const Gifs = React.createClass({

	getInitialState() {
		return {
	  	    index: 0,
		    direction: null
		};
	},

	handleSelect(selectedIndex, e) {
		this.setState({
			index: selectedIndex,
			direction: e.direction
		});
	},

	handleClick(gif) {
		this.props.selectGif({gif});
	},

	render () {
		let {gifList} = this.props;
		gifList = breakArray(gifList, 5);

	    return (
			<div className="carousel-container">
				<Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
					{gifList.map((gifItems, i) => {
		            	return (
		            		<Carousel.Item key={i}>
			            	 	{gifItems.map((gif, j) => 
									<div className="img-crop" key={j} onClick={() => this.handleClick(gif)}>
						          		<img height={100} alt="" src={gif.images.fixed_height_small_still.url} />
						          	</div>
			            		)}
		            		</Carousel.Item>
		            	)
		            })}
			    </Carousel>				
			</div>
	    )
	}
});

Gifs.propTypes = {
    gifList: PropTypes.array.isRequired
};

export default Gifs;
