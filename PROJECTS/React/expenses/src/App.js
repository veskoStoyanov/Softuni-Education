import { useContext } from 'react';

import {
  Header,
  Balance,
  IncomeExpenses,
  TransactionList,
  AddTransaction
} from './componenets'

import { GlobalContext } from './context/GlobalState';

import './App.css';

const App = () => {
  const { transactions, deleteTransaction, addTransaction } = useContext(GlobalContext);
  const transactionsLength = transactions.length;
  return (
      <>
        <Header />
        <div className="container" >
          <Balance transactions={transactions} />
          <IncomeExpenses transactions={transactions} />
          <TransactionList transactions={transactions} deleteTransaction={deleteTransaction}/>
          <AddTransaction addTransaction={addTransaction} transactionsLength={transactionsLength}/>
        </div>
      </>
  );
}

export default App;
