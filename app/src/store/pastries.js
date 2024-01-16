import { createSlice } from '@reduxjs/toolkit';

const initialState = { pastries: [{ name: 'Croissant' }] };

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
});

export const { addPastries } = pastriesSlice.actions;
