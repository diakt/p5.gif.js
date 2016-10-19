import {
    REQUEST_GIFS, RECEIVE_GIFS
} from '../constants'

const gifs = (state = {
    isFetching: false,
    didInvalidate: false,
    gifs: []
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

export default gifs;