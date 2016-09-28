import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import {
    REQUEST_TAGS, RECEIVE_TAGS
} from '../constants'

const tags = (state = {
    isFetching: false,
    didInvalidate: false,
    tags: []
}, action) => {
    switch (action.type) {
        case REQUEST_TAGS:
            return {
                ...state,
                ...action.payload,
                isFetching: true,
                didInvalidate: false
            }
        case RECEIVE_TAGS:
            return {
                ...state,
                ...action.payload,
                isFetching: false,
                didInvalidate: false,
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    tags,
    routing
});

export default rootReducer
