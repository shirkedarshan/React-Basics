import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function MyInfo(){
  return (
    <div>
      <h1>Darshan  Shirke</h1>
      <p>This is para about me</p>
      <ul><b>
        <li>Raigad</li>
        <li>Rajgad</li>
        <li>Jinji</li>
        </b></ul>
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <MyInfo/>
  </React.StrictMode>,
  document.getElementById('root')
);

var myNewP = document.createElement("p")
myNewP.innerHTML = "This is a paragraph"

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
