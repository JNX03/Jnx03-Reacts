import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

const Design = { color: "red", textAlign: "center" };

const Title = () => <h1 style={Design}>บัญชีรายรับรายจ่าย</h1>;
const Description = () => <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>;

const TransactionForm = ({ addTransaction }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [isIncome, setIsIncome] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && amount) {
      const finalAmount = isIncome ? parseFloat(amount) : -parseFloat(amount);
      addTransaction({ title, amount: finalAmount });
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
      <select onChange={(e) => setIsIncome(e.target.value === 'income')} value={isIncome ? 'income' : 'expense'}>
        <option value="income">เพิ่ม (+)</option>
        <option value="expense">ลบ (-)</option>
      </select>
      <button type="submit">เพิ่มรายการ</button>
    </form>
  );
};

const Transaction = ({ transactions, handleOnDragEnd }) => {
  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <>
      <div className="total-balance">เงินคงเหลือ: {total} บาท</div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="transactions">
          {(provided) => (
            <ul className="item-list" {...provided.droppableProps} ref={provided.innerRef}>
              {transactions.map(({ title, amount }, index) => (
                <Draggable key={index} draggableId={String(index)} index={index}>
                  {(provided) => (
                    <li
                      className={`item ${amount < 0 ? 'expense' : 'income'}`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {title} <span>{amount} บาท</span>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

function App() {
  const [transactions, setTransactions] = useState([
    { title: "ค่าอาหาร", amount: -500 },
    { title: "เงินเดือน", amount: 15000 },
    { title: "ค่าเช่าบ้าน", amount: -1000 },
  ]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(transactions);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTransactions(items);
  };

  return (
    <div>
      <Title />
      <Description />
      <TransactionForm addTransaction={addTransaction} />
      <Transaction transactions={transactions} handleOnDragEnd={handleOnDragEnd} />
    </div>
  );
}

export default App;
