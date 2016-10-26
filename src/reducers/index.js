import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import {tagList, tag} from './tags'
import {gifList, gif} from './gifs'

const rootReducer = combineReducers({
    tagList,
    tag,
    gifList,
    gif,
    routing
});

export const getUrls = state => {
	return state.gif.data.map(item => item.images.downsized.url);
}

export default rootReducer
