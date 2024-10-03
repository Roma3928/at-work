import { combineReducers } from '@reduxjs/toolkit';
import { usersSlice } from './users/slice';
import * as usersActions from './users/actions';

export const rootAction = {
  ...usersActions,
};

export const rootReducer = combineReducers({
  users: usersSlice.reducer,
});
