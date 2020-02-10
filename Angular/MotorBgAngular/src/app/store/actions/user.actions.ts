import { Action } from '@ngrx/store';
import { User } from '../../models/User';

export const LOGIN = '[USER] Login';
export const REGISTER = '[USER] Register';
export const LOGOUT = '[USER] Logout';


export class Login implements Action {
    readonly type: string = LOGIN;
    constructor(public payload: User) {
        
    }
}
export class Register implements Action {
    readonly type: string = REGISTER;
    constructor(public payload: User) {
        
    }
}

export class Logout implements Action {
    readonly type: string = LOGOUT;
    constructor(public payload: User) {
        
    }
}


export type Types = Login | Register | Logout;