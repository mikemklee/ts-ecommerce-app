import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import Authenticate from './pages/Authenticate/Authenticate';
import { auth } from './firebase/firebase.utils';

type Props = {};

type State = {
  currentUser: firebase.User | null;
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth: Function | null = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth();
      console.log('unsubscribed');
    }
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={Authenticate} />
        </Switch>
      </div>
    );
  }
}

export default App;
