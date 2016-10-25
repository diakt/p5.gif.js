import React, { PropTypes, Component } from 'react'
import './Preview.css'

const Preview = props => {
	return (
		<div className="preview-container">
			<img src={props.gifUrl} alt="" />
		</div>
	)
}

Preview.propTypes = {
    gifUrl: PropTypes.string.isRequired
};

export default Preview;
