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

export default rootReducer
