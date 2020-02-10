import { Action } from '@ngrx/store';
import { Video } from 'src/app/models/Video';

export const ADD_VIDEO = '[VIDEO] Add';
export const REMOVE_VIDEO = '[VIDEO] Remove';

export class AddVideo implements Action {
    readonly type: string = ADD_VIDEO;
    constructor(public payload: Video) {
        
    }
}
export class RemoveVideo implements Action {
    readonly type: string = REMOVE_VIDEO;
    constructor(public payload: number) {
        
    }
}

export type Types = AddVideo | RemoveVideo;