import { ADD_PLAY_LIST, REMOVE_PLAY_LIST, FLASH_MESSAGE, REORDER_PLAY_LIST } from '../actions';

export function addPlayList(ep) {
    return (dispatch) => {
        dispatch({
            type: ADD_PLAY_LIST,
            payload: ep
        });
        dispatch({
            type: FLASH_MESSAGE,
            payload: {
                message: ep.title + ' added to play list'
            }
        });
    };
}

export function removePlayList(ep) {
    return {
        type: REMOVE_PLAY_LIST,
        payload: ep,
    };
}

export function reorderPlayList({oldIndex, newIndex}) {
    return {
        type: REORDER_PLAY_LIST,
        oldIndex,
        newIndex    
    }
}

