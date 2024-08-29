import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
const myFirstElement = <h1 className="myclass">Attribute className instead of class in JSX</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);

//reportWebVitals();