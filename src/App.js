import React from 'react';
import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExp from './Components/IncomeExp';
import TransactionList from './Components/TransactionList';
import AddTrans from './Components/AddTrans';
import { GlobalProvider } from './Context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <React.Fragment>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExp />
          <TransactionList />
          <AddTrans />
        </div>
      </React.Fragment>
    </GlobalProvider>
  );
}

export default App;
