import {
    PLAY_SKETCH,
    RENDER_SKETCH,
    RECORD_SKETCH 
} from '../constants'

export const sketch = (state = {
    isPlaying: false,
    isRecording: false,
    isRendering: false,
}, action) => {
    const {type, payload} = action;

    switch (type) {
        case PLAY_SKETCH:
            return {
                ...state,
                ...payload,
                isPlaying: true,
                isRecording: false,
                isRendering: false
            }

        case RENDER_SKETCH:
            return {
                ...state,
                ...payload,
                isPlaying: false,
                isRecording: false,
                isRendering: true
            }

        case RECORD_SKETCH:
            return {
                ...state,
                ...payload,
                isPlaying: false,
                isRecording: true,
                isRendering: false
            }

        default:
            return state
    }
}
