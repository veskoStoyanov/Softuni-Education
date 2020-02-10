import { User } from 'src/app/models/User';
import * as UserActions from '../actions/user.actions';

function login(state: User, user) {
    return {
        _id: user._id,
        username: user.username,
        password: user.password,
    }
}

let myUser = {
    _id: '123',
        username: 'Vesko',
        password: '123',
}


export function userReducer(
    state: User = {
        _id: '',
        username: '',
        password: '',
    },
    action: UserActions.Types) {

    switch (action.type) {
        case UserActions.LOGIN:
            return login(state, action.payload);
        case UserActions.REGISTER:
            return [];
        default:
            return state;
    }
}