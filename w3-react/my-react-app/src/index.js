import React from 'react';
import ReactDOM from 'react-dom/client';

const x = 50

const myFirstElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);
