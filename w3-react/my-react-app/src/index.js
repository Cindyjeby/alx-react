import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from "react";

function MyForm() {
    const [textarea, setTextarea] = useState(
        "the content of a text area goes in the value attribute"
    );

    const handleChange = (event) => {
        setTextarea(event.target.value)
    }

    return (
        <form>
            <textarea value={textarea} onChange={handleChange} />
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);