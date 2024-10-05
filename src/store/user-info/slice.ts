import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserById } from './actions';
import { IUserInfoInitalState } from './type';
import { IUsersResponse } from '../../api/public/users/IUsersApi';

const initialState: IUserInfoInitalState = {
  user: null,
  isLoading: false,
  error: '',
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    updateUserProfile: (state, action: PayloadAction<IUsersResponse>) => {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchUserById.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(fetchUserById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      });
  },
});
