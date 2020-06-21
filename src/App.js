import React from 'react';
import { Header} from './componets/Header'
import { Balance } from './componets/Balance'
import './App.css';
import { IncomeExpenses } from './componets/IncomeExpenses';
import { TransactionList } from './componets/TransactionList';
import { AddTransaction } from './componets/AddTransaction';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
