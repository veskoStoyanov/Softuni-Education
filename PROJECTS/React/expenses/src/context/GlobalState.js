import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';

import { DELETE_TRANSACTIONS, ADD_TRANSACTIONS } from './constants';

const initialState = {
    transactions: [
          { id: 0, text: 'Flower', amount: -20 },
          { id: 1, text: 'Salary', amount: 300 },
          { id: 2, text: 'Book', amount: -10 },
          { id: 3, text: 'Camera', amount: 150 }
        ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
        const [ state, dispatch ] = useReducer(AppReducer, initialState);

        const deleteTransaction = (id) => {
            dispatch({
                type: DELETE_TRANSACTIONS,
                payload: id
            });
        };

        const addTransaction = (data) => {
            dispatch({
                type: ADD_TRANSACTIONS,
                payload: data
            });
        };

        return (<GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>)
};

