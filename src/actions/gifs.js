import 'whatwg-fetch'
import cuid from 'cuid'
import {REQUEST_GIFS, RECEIVE_GIFS, SELECT_GIF} from '../constants'

export const requestGifs = ({
    id = cuid(),
    timeStamp = Date.now(),
    category = ''
}) => ({
    type: REQUEST_GIFS,
    payload: {id, timeStamp, category}
});

export const receiveGifs = ({
    id = cuid(),
    timeStamp = Date.now(),
    category = '',
    items = []
}) => ({
    type: RECEIVE_GIFS,
    payload: {id, timeStamp, category, items}
});

export const loadGifs = category => dispatch => {
    dispatch(requestGifs({category}));

    return fetch(`/api/category/${category.replace(/\s/g, '+')}`)
        .then(response => response.json())
        .then(data => {
            dispatch(receiveGifs({items: data.data, category}))
        });
};

export const selectGif = ({
    id = cuid(),
    timeStamp = Date.now(),
    gif = {}
}) => ({
    type: SELECT_GIF,
    payload: {id, timeStamp, data: gif}
});
