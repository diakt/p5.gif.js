import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { loadTags, selectTag, loadGifs } from '../actions'
import { Tags, Gifs } from '../components'

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
                <Gifs {...this.props} />
            </div>
        )
    }
}

GifPage.propTypes = {
    tagList: PropTypes.array.isRequired,
    loadTags: PropTypes.func.isRequired,
    loadGifs: PropTypes.func.isRequired,
    selectTag: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { tagList, tag, gifList} = state;

    return {
        tagList: tagList.items || [],
        gifList: gifList.items || [],
        selectedTag: tag.name
    }
};



export default connect(mapStateToProps, {
    loadTags,
    loadGifs,
    selectTag
})(GifPage)

