import React, { PropTypes, Component } from 'react'
import './Preview.css'

const Preview = props => {
	const { gifUrls } = props;
	return (
		<div className="preview-container">
			{gifUrls.map((url, i) => {
				return <div key={i} className="preview-crop"><img src={url} alt="" /></div>
			})}
		</div>
	)
}

Preview.propTypes = {
    gifUrls: PropTypes.array.isRequired
};

export default Preview;
