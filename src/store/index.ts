import { configureStore } from '@reduxjs/toolkit';
import breeds from './slices/breeds';

export const store = configureStore({
  reducer: { breeds },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
