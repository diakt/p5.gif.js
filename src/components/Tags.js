import React, { PropTypes } from 'react'

const Tags = ({tags}) => {

    // FIXME - remove closure
    return (
        <ul>
            {tags.map((tag, i) =>
                <li key={i}>{tag}</li>
            )}
        </ul>
    )
};

Tags.propTypes = {
    tags: PropTypes.array.isRequired
};

export default Tags
