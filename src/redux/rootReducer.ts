import { combineReducers } from 'redux';

import userReducer, { UserState } from './user/user.reducer';
import { UserActionTypes } from './user/user.actions';

export type RootState = {
  user: UserState;
};

export type RootActionTypes = UserActionTypes;

export default combineReducers({
  user: userReducer,
});
