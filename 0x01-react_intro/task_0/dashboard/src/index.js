import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';

// this method renders two components on the same page

ReactDOM.render(
	<React.StrictMode>
	<Notifications />
	<App />
	</React.StrictMode>,
	document.getElementById('root')
);
