import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from '../components/Toast';

const storedState = localStorage.getItem('reduxState');
const initialState = storedState
  ? JSON.parse(storedState)
  : {
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
      console.log(action.error.message);
      state.isLoading = false;
      toastError('Identifiants incorrects ⚠️');
      throw new Error('Authentication failed!');
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user.isConnected = true;
      state.isLoading = false;
      toastSuccess('Vous êtes connecté ! ✅');
      localStorage.setItem('reduxState', JSON.stringify(state));
    });

    // logout
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
      console.log('Déconnexion en cours...');
    });
    builder.addCase(logout.rejected, (state) => {
      state.isLoading = false;
      toastError('La déconnexion a échouée ⚠️');
      throw new Error('Logout failed.');
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      console.log(action.payload.message);
      state.isLoading = false;
      state.user.isConnected = false;
      localStorage.setItem('reduxState', JSON.stringify(state));
      toastSuccess('Vous êtes déconnecté ! ✅');
    });
  },
});
