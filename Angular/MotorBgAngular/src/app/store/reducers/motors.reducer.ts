import { Motor } from 'src/app/models/Motor';
import * as MotorActions from '../actions/motors.actions';

function addMotor(state: Motor[], motor) {
    return [...state, motor]
}


export function motorsReducer(
    state: Motor[] = [],
    action: MotorActions.Types) {

    switch (action.type) {
        case MotorActions.ADD_MOTOR:
            return addMotor(state, action.payload);
        case MotorActions.REMOVE_MOTOR:
            return [];
        default:
            return state;
    }
}