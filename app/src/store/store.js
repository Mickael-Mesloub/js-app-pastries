import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';
import { authSliceAsync } from './auth';
import { pastriesSlice } from './pastries';

const store = configureStore({
  reducer: {
    pastries: pastriesSlice.reducer,
    game: gameReducer,
    user: authSliceAsync.reducer,
  },
});
export default store;
