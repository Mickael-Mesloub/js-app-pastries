import { configureStore } from '@reduxjs/toolkit';
import { pastriesSlice } from './pastries';
import { userSlice } from './user';

const store = configureStore({
  reducer: {
    pastries: pastriesSlice.reducer,
    user: userSlice.reducer,
  },
});
export default store;
