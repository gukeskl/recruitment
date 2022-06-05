import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import breeds from './slices/breeds';
import favoritesImages from './slices/favoritesImages';

export const store = configureStore({
  reducer: { favoritesImages, breeds },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
