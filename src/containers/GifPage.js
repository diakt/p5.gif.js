import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { loadTags, selectTag } from '../actions'
import { Tags } from '../components'

const loadData = props => {
    props.loadTags();
};

class GifPage extends Component {
    componentWillMount() {
        loadData(this.props)
    }

    render() {
        return (
            <div className="GifPage">
                <Tags {...this.props} />
            </div>
        )
    }
}

GifPage.propTypes = {
    tagList: PropTypes.array.isRequired,
    loadTags: PropTypes.func.isRequired,
    selectTag: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { tagList, tag, selectTag } = state;
    return {
        tagList: tagList.items || [],
        selectedTag: tag.name,
        selectTag
    }
};

export default connect(mapStateToProps, {
    loadTags,
    selectTag
})(GifPage)

