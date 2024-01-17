// gameSlice.js
import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    rollsLeft: 3,
    won: false,
    lost: false,
    diceValues: Array(5).fill(1),
    data: [],
  },
  reducers: {
    setRollsLeft: (state, action) => {
      state.rollsLeft = action.payload;
    },
    setWon: (state, action) => {
      state.won = action.payload;
    },
    setLost: (state, action) => {
      state.lost = action.payload;
    },
    setDiceValues: (state, action) => {
      state.diceValues = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {
  setRollsLeft,
  setWon,
  setLost,
  setDiceValues,
  setData,
} = gameSlice.actions;

export default gameSlice.reducer;
