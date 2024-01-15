import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { pastries: [{ name: 'Croissant' }] };

const pastriesSlice = createSlice({
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

const store = configureStore({
  reducer: {
    pastries: pastriesSlice.reducer,
  },
});

export const { addPastries } = pastriesSlice.actions;

export default store;
