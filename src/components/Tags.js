import React, { PropTypes, Component } from 'react'
import { Button } from 'react-bootstrap'
import './Tags.css'

class Tags extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(tagName) {
		this.props.selectTag({name: tagName});
		this.props.loadGifs(tagName);
	}

	render () {
		const {tagList, selectedTag} = this.props;
	    return (
	        <ul className="TagList">
	            {tagList.map((tagName, i) => {
	            	const bsStyle = tagName === selectedTag ? 'danger' : 'default';
	            	return (
	            		<li className="Tag" key={i}>
	            			<Button bsStyle={bsStyle} onClick={() => this.handleClick(tagName)}>{tagName}</Button>
	            		</li>
	            	);
	            })}
	        </ul>
	    )
	}
};

Tags.propTypes = {
    tagList: PropTypes.array.isRequired,
    selectedTag: PropTypes.string.isRequired,
    selectTag: PropTypes.func.isRequired,
    loadGifs: PropTypes.func.isRequired
};

export default Tags;
