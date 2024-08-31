import React, { useState } from 'react';
import Item from './Item';
import './App.css';

const Design = { color: "red", textAlign: "center" };

const Title = () => <h1 style={Design}>บัญชีรายรับรายจ่าย</h1>;
const Description = () => <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>;

const TransactionForm = ({ addTransaction }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && amount) {
      addTransaction({ title, amount });
      setTitle('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <input
        type="text"
        placeholder="ชื่อรายการ"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="จำนวนเงิน"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">เพิ่มรายการ</button>
    </form>
  );
};

const Transaction = ({ transactions }) => {
  return (
    <ul className='item-list'>
      {transactions.map((transaction, index) => (
        <Item key={index} title={transaction.title} amount={transaction.amount} />
      ))}
    </ul>
  );
}

function App() {
  const [transactions, setTransactions] = useState([
    { title: "ค่าอาหาร", amount: "500" },
    { title: "ค่าเดินทาง", amount: "300" },
    { title: "ค่าเช่าบ้าน", amount: "1000" },
  ]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
      <Title />
      <Description />
      <TransactionForm addTransaction={addTransaction} />
      <Transaction transactions={transactions} />
    </div>
  );
}

export default App;
