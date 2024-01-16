import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    isConnected: false,
  },
  isLoading: false,
};

export const login = createAsyncThunk('login', async (userData) => {
  console.log(userData);
  // use import.meta.env.VITE_API_URL to access API url
  const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Authentication failed!');
  }
});

export const logout = createAsyncThunk('logout', async () => {
  // use import.meta.env.VITE_API_URL to access API url
  const response = await fetch(`${import.meta.env.VITE_API_URL}/logout`, {
    credentials: 'include',
  });
  return response.json();
});
export const authSliceAsync = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      console.log('Connexion en cours...');
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      throw new Error('Authentication failed!');
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload.message);
      state.user.isConnected = true;
      state.isLoading = false;
    });

    // logout
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
      console.log('Déconnexion en cours...');
    });
    builder.addCase(logout.rejected, (state) => {
      state.isLoading = false;
      throw new Error('Logout failed.');
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      console.log(action.payload.message);
      state.isLoading = false;
      state.user.isConnected = false;
    });
  },
});
