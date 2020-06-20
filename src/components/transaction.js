import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(ExpenseContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  const className1 = transaction.amount < 0 ? "minus" : "plus";
  return (
    <>
      <li className={className1}>
        {transaction.text}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </li>
    </>
  );
};
