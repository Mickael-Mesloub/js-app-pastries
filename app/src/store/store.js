import { configureStore } from '@reduxjs/toolkit';
import { pastriesSlice } from './pastries';
import { authSliceAsync } from './auth';

const store = configureStore({
  reducer: {
    pastries: pastriesSlice.reducer,
    user: authSliceAsync.reducer,
  },
});
export default store;
