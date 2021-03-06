 import { DELETE_TRANSACTIONS, ADD_TRANSACTIONS} from './constants';
 
 const AppReducer = (state, action) => {
    switch(action.type) {
        case DELETE_TRANSACTIONS: 
        return {
            ...state,
            transactions: state.transactions.filter(x => x.id !== action.payload)
        };
        case ADD_TRANSACTIONS: 
        return {
            ...state,
            transactions: [ ...state.transactions, action.payload]
        };

        default: 
            return state;
    }
}

export default AppReducer;