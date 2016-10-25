import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { loadTags, selectTag, loadGifs, selectGif } from '../actions'
import { Tags, Gifs, Preview } from '../components'

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
                <Preview gifUrl={this.props.gifUrl} />
            </div>
        )
    }
}

GifPage.propTypes = {
    tagList: PropTypes.array.isRequired,
    loadTags: PropTypes.func.isRequired,
    loadGifs: PropTypes.func.isRequired,
    selectTag: PropTypes.func.isRequired,
    selectGif: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { tagList, tag, gifList, gif} = state;
    return {
        tagList: tagList.items || [],
        gifList: gifList.items || [],
        selectedTag: tag.name,
        gifUrl: gif.data ? gif.data.images.downsized.url : ''
    }
};



export default connect(mapStateToProps, {
    loadTags,
    loadGifs,
    selectTag,
    selectGif
})(GifPage)

