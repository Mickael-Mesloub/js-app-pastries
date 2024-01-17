import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = { pastries: [], status: '' };

export const fetchAllPastriesAsync = createAsyncThunk(
  'get/pastries',
  async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/pastries`,
      {
        credentials: 'include',
      }
    );
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('La récupération des pâtisseries a échouée ⚠️');
    }
  }
);

export const pastriesSlice = createSlice({
  name: 'pastries',
  initialState,
  reducers: {
    // TODO: insert reducer functions here
    addPastries: (state, action) => {
      console.log(state.pastries);
      state.pastries.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    // get/pastries
    builder.addCase(fetchAllPastriesAsync.pending, (state) => {
      state.status = 'pending';
      console.log('Récupération des pâtisseries en cours...');
    });
    builder.addCase(fetchAllPastriesAsync.rejected, (state, action) => {
      state.status = 'error';
      console.log(action.error.message);
    });
    builder.addCase(fetchAllPastriesAsync.fulfilled, (state, action) => {
      state.status = 'success';
      console.log(action.payload);
      state.pastries = action.payload;
    });
  },
});

export const { addPastries } = pastriesSlice.actions;
