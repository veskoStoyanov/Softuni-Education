import { User } from 'src/app/models/User';
import * as UserActions from '../actions/user.actions';

let initialState = {
    _id: '',
    username: '',
    password: '',
}

function login(state: User, user) {
    return {
        _id: user._id,
        username: user.username,
        password: user.password,
    }
}

function logout () {
    return initialState;
}

export function userReducer(
    state: User = initialState,
    
    action: UserActions.Types) {

    switch (action.type) {
        case UserActions.LOGIN:
            return login(state, action.payload);
        case UserActions.LOGOUT:
            return logout();
        default:
            return state;
    }
}