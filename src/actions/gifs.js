import 'whatwg-fetch'
import cuid from 'cuid'
import {REQUEST_GIFS, RECEIVE_GIFS, SELECT_GIF, DESELECT_GIF} from '../constants'

export const requestGifs = (category, id = cuid(), timeStamp = Date.now()) => ({
    type: REQUEST_GIFS,
    payload: {id, timeStamp, category}
});

export const receiveGifs = (payload, id = cuid(), timeStamp = Date.now()) => ({
    type: RECEIVE_GIFS,
    payload: {id, timeStamp, ...payload}
});

export const loadGifs = category => dispatch => {
    dispatch(requestGifs(category));

    return fetch(`/api/category/${category.replace(/\s/g, '+')}`)
        .then(response => response.json())
        .then(data => {
            dispatch(receiveGifs({items: data.data, category}))
        });
};

export const selectGif = (gif = {}, id = cuid(), timeStamp = Date.now()) => ({
    type: SELECT_GIF,
    payload: {id, timeStamp, data: gif}
});

export const deselectGif = (gif = {}, id = cuid(), timeStamp = Date.now()) => ({
    type: SELECT_GIF,
    payload: {id, timeStamp, data: gif}
});
