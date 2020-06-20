import React from "react";
import { Header } from "./components/header";
import { Balance } from "./components/balance";
import { IncomeExpenses } from "./components/incomeExpenses";
import { TransactionList } from "./components/transactionList";
import { AddTransaction } from "./components/addTransaction";

import { ExpenceProvider } from "./context/ExpenseState";

import "./App.css";

function App() {
  return (
    <div>
      <ExpenceProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </ExpenceProvider>
    </div>
  );
}

export default App;
