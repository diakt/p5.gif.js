import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import {tagList, tag} from './tags'
import {gifList} from './gifs'

const rootReducer = combineReducers({
    tagList,
    tag,
    gifList,
    routing
});

export default rootReducer
