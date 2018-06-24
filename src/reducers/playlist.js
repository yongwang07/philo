import { ADD_PLAY_LIST, REMOVE_PLAY_LIST, REORDER_PLAY_LIST } from '../actions';
import { createReducer } from '../utils';

const addPlayList = (state = [], { payload }) => {
    let found = false;
    for (let i = 0; i < state.length && !found; i++) {
        const { podcastId, title } = state[i];
        if (podcastId === payload.podcastId && title === payload.title) {
            found = true
        }
    }
    return found ? state : [...state, payload];
}

const removePlayList = (state = [], { payload }) => {
    const { podcastId, title } = payload;
    return state.filter(ep => ep.podcastId !== podcastId || ep.title !== title);
}

const reorderPlayList = (state = [], {oldIndex, newIndex}) => {
    const newState = state.slice();
    [newState[oldIndex], newState[newIndex]] = [newState[newIndex], newState[oldIndex]];
    return newState;
}

const handlers = {
  [ADD_PLAY_LIST]: addPlayList,
  [REMOVE_PLAY_LIST]: removePlayList,
  [REORDER_PLAY_LIST]: reorderPlayList
};

export default createReducer({}, handlers);
