import { configureStore } from '@reduxjs/toolkit';
import habitsReducer from './habitsSlice';

export const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
});