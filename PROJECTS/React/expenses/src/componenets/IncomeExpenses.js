const IncomeExpenses = ({ transactions }) => {
   const result = transactions
    .reduce((acc, curr) => {
        acc[curr.amount > 0 ? 'plus' : 'minus'] += curr.amount;
        return acc;
    }, {
        minus: 0,
        plus: 0
    });

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${result.plus.toFixed(2)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${result.minus.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses;
