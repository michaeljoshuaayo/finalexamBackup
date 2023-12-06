import React from "react";

function TransactionReport({ transactionData }) {
  console.log("Transaction Data in TransactionReport:", transactionData);

  return (
    <div>
      <h2>Transaction Report</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.productName}</td>
              <td>{transaction.quantity}</td>
              <td>{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionReport;
