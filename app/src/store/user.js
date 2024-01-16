import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    email: '',
    password: '',
    isConnected: false,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // TODO: insert reducer functions here
    login: (state, action) => {
      state.user = { ...action.payload };
    },
    logout: (state) => {
      state.user = {
        ...initialState.user,
      };
    },
  },
});

export const { login, logout } = userSlice.actions;
