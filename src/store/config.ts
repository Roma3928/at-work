import { combineReducers } from '@reduxjs/toolkit';
import { usersSlice } from './users/slice';
import * as usersActions from './users/actions';
import * as userInfoActions from './user-info/actions';
import { userInfoSlice } from './user-info/slice';

export const rootAction = {
  ...usersActions,
  ...usersSlice.actions,
  ...userInfoActions,
  ...userInfoSlice.actions,
};

export const rootReducer = combineReducers({
  users: usersSlice.reducer,
  userInfo: userInfoSlice.reducer,
});
