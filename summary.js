// Summary.js
import React from 'react';
import { Pie } from 'react-chartjs-2';

function Summary({ transactions }) {
  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + Math.abs(transaction.amount), 0);

  const categories = [...new Set(transactions.map((t) => t.category))];

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses by Category',
        data: categories.map((cat) =>
          transactions
            .filter((t) => t.category === cat && t.amount < 0)
            .reduce((acc, t) => acc + Math.abs(t.amount), 0)
        ),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  return (
    <div>
      <h3>Summary</h3>
      <p>Total Income: ${totalIncome.toFixed(2)}</p>
      <p>Total Expense: ${totalExpense.toFixed(2)}</p>
      <Pie data={data} />
    </div>
  );
}

export default Summary;
