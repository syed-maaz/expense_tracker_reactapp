import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseState";

import { Transaction } from "./transaction";

export const TransactionList = () => {
  const { transactions } = useContext(ExpenseContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction, key) => (
          <Transaction key={key} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
