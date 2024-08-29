import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
const myFirstElement = (
    <div>
        <p>one and two</p>
        <p>uno y dos</p>
        <p>ingles y espanol</p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);

//reportWebVitals();