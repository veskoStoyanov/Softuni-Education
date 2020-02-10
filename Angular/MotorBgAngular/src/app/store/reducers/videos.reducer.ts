import { Video } from 'src/app/models/Video';
import * as VideoActions from '../actions/videos.actions';

function addVideo(state: Video[], video) {
    return [...state, video]
}


export function videoReducer(
    state: Video[] = [],
    action: VideoActions.Types) {

    switch (action.type) {
        case VideoActions.ADD_VIDEO:
            return addVideo(state, action.payload);
        case VideoActions.REMOVE_VIDEO:
            return [];
        default:
            return state;
    }
}