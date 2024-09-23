import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';

// this method renders two components on the same page
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<React.StrictMode>
			<App />
		</React.StrictMode>
		<div id="root-notifications">
			<Notifications />
		</div>
	</>
);

reportWebVitals();
