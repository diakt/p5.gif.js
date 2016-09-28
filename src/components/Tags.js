import React, { PropTypes } from 'react'

const Tags = ({tags}) => (
    <ul>
        {tags.map((tas, i) =>
            <li key={i}>{tag}</li>
        )}
    </ul>
)

Tags.propTypes = {
    tags: PropTypes.array.isRequired
}

export default Tags
