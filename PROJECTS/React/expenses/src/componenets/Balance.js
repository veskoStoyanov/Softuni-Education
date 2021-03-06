const Balance = ({ transactions }) => {
    const total = transactions
    .reduce((acc, curr) => {
        acc +=curr.amount;
        return acc
    }, 0)
    .toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
};

export default Balance;