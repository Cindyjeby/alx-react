import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
    return <h1>I love {props.brand.model}</h1>
}

function Garage() {
    const carInfo = {name: "Ford", model: "Mustang"}
    return (
        <>
            <h2>Which brands are there</h2>
            <Car brand={carInfo} />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />)

