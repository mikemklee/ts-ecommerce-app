import { User } from '../../App';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export type SetCurrentUserAction = {
  type: typeof SET_CURRENT_USER;
  payload: User | null;
};

export type UserActions = SetCurrentUserAction;

export const setCurrentUser = (user: User | null): SetCurrentUserAction => ({
  type: SET_CURRENT_USER,
  payload: user,
});
