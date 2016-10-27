import {
    REQUEST_GIFS, RECEIVE_GIFS, SELECT_GIF, DESELECT_GIF
} from '../constants'


export const getUrls = state => {
    return state.gif.items.map(item => {
        return item.data.images.downsized.url
    });
}

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
    items: []
}, action) => {
    const {type, payload} = action;

    switch (type) {
        case SELECT_GIF:
            let items = state.items.concat(payload);
            const len = items.length;            
            items = [items[len - 2], items[len - 1]].filter(Boolean);
            
            return {
                ...state,
                items
            }

        case DESELECT_GIF:
            return {
                ...state,
                items: playload
            }
            
        default:
            return state;    
    }
}
