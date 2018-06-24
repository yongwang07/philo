import { LOAD_PODCAST_EPISODE } from '../actions';

export function playEpisodeDone({ title, podcastTitle }) {
    return (dispatch, getState) => {
        const { playlist } = getState();
        let i = 0;
        for (i = 0; i < playlist.length; i++) {
            if (playlist[i].podcastTitle === podcastTitle && playlist[i].title === title) {
                break;
            }
        }
        if (i + 1 < playlist.length) {
            dispatch({
                type: LOAD_PODCAST_EPISODE,
                payload: playlist[i + 1]
            });
        }
    };
}