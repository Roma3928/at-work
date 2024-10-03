import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

export const fetchUsers = createAsyncThunk<any, any>(
  'users/fetchUsers',
  async ({ page }, thunkApi) => {
    try {
      const users = await api.public.users.getUsers(page);
      console.log(users);

      return users;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue(error);
    }
  },
);
