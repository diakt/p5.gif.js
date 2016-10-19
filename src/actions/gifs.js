import 'whatwg-fetch'
import cuid from 'cuid'
import {REQUEST_GIFS, RECEIVE_GIFS} from '../constants'

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
    items = []
}) => ({
    type: RECEIVE_GIFS,
    payload: {id, timeStamp, items}
});

export const loadGifs = category => dispatch => {
    dispatch(requestGifs({category}));

    return fetch(`/api/category/${category}`)
        .then(response => response.json())
        .then(data => {
            dispatch(receiveGifs({items: data}))
        });
};
