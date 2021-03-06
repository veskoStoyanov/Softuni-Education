import { Transaction } from '.'

const TransactionList = ({ transactions, deleteTransaction }) => (
    <>
        <h3>History</h3>
        <ul className="list">
            {
                transactions && transactions.map(transaction => (
                   <Transaction
                    key={transaction.id}
                    transaction={transaction}
                    deleteTransaction={deleteTransaction}
                   />
                ))
            }
        </ul>
    </>
);

export default TransactionList
