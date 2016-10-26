import 'whatwg-fetch'
import cuid from 'cuid'
import {
    PLAY_SKETCH,
    RENDER_SKETCH,
    RECORD_SKETCH 
} from '../constants'

export const play = ({
    id = cuid(),
    timeStamp = Date.now()
}) => ({
    type: PLAY_SKETCH,
    payload: {id, timeStamp}
});

export const record = ({
    id = cuid(),
    timeStamp = Date.now()
}) => ({
    type: RECORD_SKETCH,
    payload: {id, timeStamp}
});

export const render = ({
    id = cuid(),
    timeStamp = Date.now()
}) => ({
    type: RENDER_SKETCH,
    payload: {id, timeStamp}
});
