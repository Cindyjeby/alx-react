import React from 'react';
import ReactDOM from 'react-dom/client';

function Car() {
    return <h2>Hi, I am a car</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

