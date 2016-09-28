import 'whatwg-fetch'
import cuid from 'cuid'
import {REQUEST_TAGS, RECEIVE_TAGS} from '../constants'

export const requestTags = () => ({
    type: REQUEST_TAGS
})

export const receiveTags = ({
    id = cuid(),
    timeStamp = Date.now(),
    json = {}
}) => ({
    type: RECEIVE_TAGS,
    payload: {id, timeStamp, tags: json}
})

export const loadTags = () => dispatch => {
    dispatch(requestTags());
    return fetch('/api/tags')
        .then(response => response.json())
        .then(response => {
            dispatch(receiveTags(response))
        });
}
