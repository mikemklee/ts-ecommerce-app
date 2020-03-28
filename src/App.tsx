import React, { Dispatch } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import Authenticate from './pages/Authenticate/Authenticate';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { RootActionTypes } from './redux/rootReducer';

export type User = firebase.firestore.DocumentData & { id?: string };

type Props = ReturnType<typeof mapDispatchToProps>;
type State = {};

class App extends React.Component<Props, State> {
  unsubscribeFromAuth: Function | null = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef) {
          userRef.onSnapshot(snapShot => {
            this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        }
      } else {
        this.props.setCurrentUser(userAuth);
      }
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
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={Authenticate} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<RootActionTypes>) => ({
  setCurrentUser: (user: User | null) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
