import { Action } from '@ngrx/store';
import { Motor } from 'src/app/models/Motor';

export const ADD_MOTOR= '[MOTOR] Add';
export const REMOVE_MOTOR = '[MOTOR] Remove';

export class AddMotor implements Action {
    readonly type: string = ADD_MOTOR;
    constructor(public payload: Motor) {
        
    }
}
export class RemoveMotor implements Action {
    readonly type: string = REMOVE_MOTOR;
    constructor(public payload: number) {
        
    }
}

export type Types = AddMotor | RemoveMotor;