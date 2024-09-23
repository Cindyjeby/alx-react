import React from 'react';
import './App.css';
import {getFullYear, getFooterCopy} from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='/images/holberton.jpg' className='App-logo' alt="logo" />
	      <h1>School Dashboard</h1>
      </header>

      <body className="App-body">
        <p>Login to access the full dashboard</p>

        <form>
          <div className='container'>
          <div>
            <label htmlFor='email'>Email: </label>
            <input type='email' id='email' />
          </div>
          <div>
            <label htmlFor='password'>Password: </label>
            <input type='password' id='password' />
          </div>
          </div>
          <div className="btn">
            <button>OK</button>
          </div>
        </form>
      </body>

      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy}</p>
        </footer>
        </div>
  );
}

export default App;
