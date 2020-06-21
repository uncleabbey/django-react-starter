import React from 'react';

const HelloWorld = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="../../static/frontend/images/logo.svg"
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Js
        </a>
        <p>
          Created by 
          <a
            href="https://github.com/uncleabbey"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}Uncleabbey
          </a>
        </p>
      </header>
    </div>
  );
};

export default HelloWorld;
