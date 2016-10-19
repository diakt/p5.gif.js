import {
    REQUEST_TAGS, RECEIVE_TAGS, SELECT_TAG
} from '../constants'

export const tagList = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    const {type, payload} = action;

    switch (type) {
        case REQUEST_TAGS:
            return {
                ...state,
                ...payload,
                isFetching: true,
                didInvalidate: false
            }
        case RECEIVE_TAGS:
            return {
                ...state,
                ...payload,
                isFetching: false,
                didInvalidate: false,
            }

        default:
            return state
    }
}

export const tag = (state = {
    name: ''
}, action) => {
    const {type, payload} = action;

    switch (type) {
        case SELECT_TAG:
            return {
                ...state,
                ...payload
            }

        default:
            return state;    
    }
}
