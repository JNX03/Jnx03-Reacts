import React from 'react';
import Item from './Item';
import './App.css';


const Design = {color: "red", textAlign: "center"};
const Title = () => <h1 style={Design}>บัญชีรายรับรายจ่าย</h1>;
const Description = () => <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>;
const Transaction = () => {
  return (
    <ul>
      <li>เงินเดือน<span>150000</span></li>
      <li>ค่าอาหาร<span>-3000</span></li>
    </ul>
  );
}

function App() {
  return (
    <div>
      <Title/>
      <Description/>
      <Transaction/>
      <Item />
    </div>
  );
}

export default App;
