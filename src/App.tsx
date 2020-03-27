import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import Authenticate from './pages/Authenticate/Authenticate';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={Authenticate} />
      </Switch>
    </div>
  );
}

export default App;
