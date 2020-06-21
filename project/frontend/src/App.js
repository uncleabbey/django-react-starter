import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HelloWorld from './components/HelloWorld';

const App = () => {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/" exact component={HelloWorld} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
