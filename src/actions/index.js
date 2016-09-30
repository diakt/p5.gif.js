import 'whatwg-fetch'
import cuid from 'cuid'
import {REQUEST_TAGS, RECEIVE_TAGS} from '../constants'

export const requestTags = ({
    id = cuid(),
    timeStamp = Date.now()
}) => ({
    type: REQUEST_TAGS,
    payload: {id, timeStamp}
});

export const receiveTags = ({
    id = cuid(),
    timeStamp = Date.now(),
    data = {}
}) => ({
    type: RECEIVE_TAGS,
    payload: {id, timeStamp, tags: data}
});

export const loadTags = () => dispatch => {
    dispatch(requestTags({}));

    return fetch('/api/tags')
        .then(response => response.json())
        .then(data => {
            dispatch(receiveTags({data}))
        });
};
