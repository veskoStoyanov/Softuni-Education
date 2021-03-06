import React, { useState } from 'react'

const AddTransaction = ({ addTransaction, transactionsLength }) => {
    const [ text, setText ] = useState('');
    const [ amount, setAmount] = useState(0);

    const handleChangeText = (e) => setText(e.target.value);

    const handleChangeAmount = (e) => setAmount(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        addTransaction({
            amount: +amount,
            text,
            id: transactionsLength
        });

        setText('');
        setAmount('');
    };

    return (
        <>
             <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label >Text</label>
                    <input
                        value={text}
                        onChange={handleChangeText}
                        name="text"
                        type="text"
                        placeholder="Enter text..."
                    />
                </div>
                <div className="form-control">
                    <label
                        >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input
                        value={amount}
                        onChange={handleChangeAmount}
                        name="amount"
                        type="number"
                        placeholder="Enter amount..."
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction;
