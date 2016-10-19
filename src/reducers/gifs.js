import {
    REQUEST_GIFS, RECEIVE_GIFS
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
