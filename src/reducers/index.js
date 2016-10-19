import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import {tagList, tag} from './tags'
import gifs from './gifs'

const rootReducer = combineReducers({
    tagList,
    tag,
    gifs,
    routing
});

export default rootReducer
