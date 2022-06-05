import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DogImageUrl } from 'types';

export type FavoriteDogsImagesState = {
  favorites: DogImageUrl[];
};

const initialState: FavoriteDogsImagesState = {
  favorites: [],
};

export const favoritesDogsImagesSlice = createSlice({
  name: 'favoritesDogsImages',
  initialState,
  reducers: {
    addToFavorites: (state, { payload: url }: PayloadAction<DogImageUrl>) => {
      state.favorites.push(url);
    },
    removeFromFavorites: (state, { payload: url }: PayloadAction<DogImageUrl>) => {
      state.favorites = state.favorites.filter(value => value !== url);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesDogsImagesSlice.actions;

export default favoritesDogsImagesSlice.reducer;
