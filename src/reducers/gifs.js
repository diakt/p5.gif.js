import {
    REQUEST_GIFS, RECEIVE_GIFS, SELECT_GIF
} from '../constants'

export const gifList = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    const {type, payload} = action;

    switch (type) {
        case REQUEST_GIFS:
            return {
                ...state,
                ...payload,
                isFetching: true,
                didInvalidate: false
            }
        case RECEIVE_GIFS:
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

export const gif = (state = {
    gif: {}
}, action) => {
    const {type, payload} = action;

    switch (type) {
        case SELECT_GIF:
            return {
                ...state,
                ...payload
            }
        default:
            return state;    
    }
}
