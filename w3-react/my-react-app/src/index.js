import React from 'react';
import ReactDOM from 'react-dom/client';

// passing arguments using the shoot function
function MissedGoal() {
    return <h1>Missed!</h1>;
}

function MadeGoal() {
    return <h1>Goal!</h1>;
}

function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />;
    }
    return <MissedGoal/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={true} />);

