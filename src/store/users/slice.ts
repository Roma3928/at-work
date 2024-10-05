import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from './actions';
import { IUsersInitalState } from './type';

const initialState: IUsersInitalState = {
  users: [],
  isLoading: false,
  error: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    archiveUser(state, action: PayloadAction<number>) {
      state.users = state.users.map((user) =>
        user.id === action.payload ? { ...user, isArchived: true } : user,
      );
    },
    activateUser(state, action: PayloadAction<number>) {
      state.users = state.users.map((user) =>
        user.id === action.payload ? { ...user, isArchived: false } : user,
      );
    },
    hideUser(state, action: PayloadAction<number>) {
      state.users = state.users.map((user) =>
        user.id === action.payload ? { ...user, isHidden: true } : user,
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      });
  },
});
