import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import HelloFuncCPN from './nooncomponent'

ReactDOM.render(<App/>,document.getElementById("root"));
//สร้าง compenent (class)
// class helloClassCPN extends React.Component{
//   render(){
//     return <h1>สวัสดี Class compenent</h1>
//   }
// }
// ReactDOM.render(<HelloFuncCPN/>,document.getElementById("root"));

//สร้าง component
// function HelloFuncCPN(){
//   return <h1>hello fuction component</h1>
// }
// ReactDOM.render(<HelloFuncCPN/>,document.getElementById("root"));







// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();