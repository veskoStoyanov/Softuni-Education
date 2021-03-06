import React from 'react'

const Transaction = ({ transaction, deleteTransaction }) => {
    const { amount, id, text } = transaction;
    const sign = amount > 0 ? '+' : '-';
    const classType = amount > 0 ? 'plus' : 'minus';

    return (
        <li className={classType}>
            {text}
            <span>{sign}${Math.abs(amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(id)}>x</button>
        </li>
    )
}

export default Transaction
