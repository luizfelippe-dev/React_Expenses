// TransactionItem.js
import React from 'react';

function TransactionItem({ transaction, deleteTransaction }) {
  return (
    <li>
      {transaction.description} - ${transaction.amount.toFixed(2)} ({transaction.category})
      <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
    </li>
  );
}

export default TransactionItem;
