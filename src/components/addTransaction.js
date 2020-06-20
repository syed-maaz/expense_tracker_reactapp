import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [amountType, setAmountType] = useState(false);

  const { addTransaction } = useContext(ExpenseContext);

  const onSubmit = (e) => {
    e.preventDefault();

    let tempAmount = amount;
    tempAmount = Math.abs(tempAmount);
    if (amountType) {
      tempAmount = amount * -1;
    }

    const transaction = {
      id: Math.floor(Math.random() * 1000),
      text,
      amount: tempAmount,
    };

    addTransaction(transaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control expense-toggle">
          <span>Expense</span>
          <span>
            <label class="switch">
              <input
                type="checkbox"
                defaultChecked={amountType}
                onClick={(e) => setAmountType(!amountType)}
              />
              <span class="slider round"></span>
            </label>
          </span>
          <span>Income</span>
        </div>
        <div className="form-control">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
