import React from 'react';
import ReactDOM from 'react-dom/client';

function Car() {
    return (
        <>
            <h2>Hi, I am a car</h2>
            <Garage/>
        </>
    );
}

function Garage() {
    return (
        <>
            <h3>How many car are in here?</h3>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

