import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderTemplate from './components/header';

function App() {
  const links = ["www.google.com", "www.google.com", "www.google.com", "www.google.com"];
  const texts = ["link1", "link2", "link3", "link4"];
  return (
    <div className="App">
      <HeaderTemplate length={4} link={links} text={texts} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
