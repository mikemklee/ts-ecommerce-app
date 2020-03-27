import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Homepage from './pages/Homepage/Homepage';

const Hatspage = () => {
  return <div>Hats</div>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={Hatspage} />
      </Switch>
    </div>
  );
}

export default App;
