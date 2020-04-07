import { UserActions, SET_CURRENT_USER } from './user.actions';
import { User } from '../../App';

export type UserState = {
  currentUser: User | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
};

const userReducer = (state: UserState = INITIAL_STATE, action: UserActions) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
