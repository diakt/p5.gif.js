import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { loadTags, selectTag, loadGifs, selectGif, deselectGif, play, record, render } from '../actions'
import { Tags, Gifs, Preview, Sketch } from '../components'
import { getUrls } from '../reducers/gifs'

class GifPage extends Component {
    componentWillMount() {
        this.props.loadTags()
    }

    render() {
        const {
            loadTags, selectTag, loadGifs, selectGif, play, record, render,
            tagList,
            selectedTag,
            gifList,
            gifUrls
        } = this.props;

        return (
            <div className="GifPage">

                <Tags 
                    tagList={tagList}
                    loadTags={loadTags}
                    loadGifs={loadGifs}
                    selectedTag={selectedTag}
                    selectTag={selectTag} />
                
                <Gifs gifList={gifList} selectGif={selectGif} />

                <Preview gifUrls={gifUrls} />
                
                <Sketch 
                    play={play}
                    record={record}
                    render={render}
                    deselectGif={deselectGif}
                    gifUrls={gifUrls} />

            </div>
        )
    }
}

GifPage.propTypes = {
    tagList: PropTypes.array.isRequired,
    gifList: PropTypes.array.isRequired,
    selectedTag: PropTypes.string.isRequired,
    gifUrls: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    const { tagList, tag, gifList, gif} = state;
    return {
        tagList: tagList.items || [],
        gifList: gifList.items || [],
        selectedTag: tag.name,
        gifUrls: getUrls(state)
    }
};

export default connect(mapStateToProps, 
    { loadTags, selectTag, loadGifs, selectGif, deselectGif, play, record, render }
)(GifPage)

