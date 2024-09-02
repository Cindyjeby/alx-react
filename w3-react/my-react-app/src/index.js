import React from 'react';
import ReactDOM from 'react-dom/client';

// conditional rednering using ternary operator

function Car(props) {
    return <li>I am a { props.brand }</li>;
}
function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <>
            <h1>Who live in my garage?</h1>
            <ul>
                {cars.map((car) => <Car brand={car} />)}
            </ul>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);