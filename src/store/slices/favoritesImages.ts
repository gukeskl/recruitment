import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Breed, DogImageUrl } from 'types';

export type FavoriteDogsImagesState = {
  favorites: { [breed: Breed]: DogImageUrl[] };
};

const initialState: FavoriteDogsImagesState = {
  favorites: {},
};

export type AddToFavoritesPayload = {
  breed: Breed;
  url: DogImageUrl;
};

export type RemoveFromFavoritesPayload = {
  breed: Breed;
  url: DogImageUrl;
};

export const favoritesDogsImagesSlice = createSlice({
  name: 'favoritesDogsImages',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<AddToFavoritesPayload>) => {
      const { breed, url } = action.payload;
      if (!state.favorites[breed]) state.favorites[breed] = [];
      state.favorites[breed].push(url);
    },
    removeFromFavorites: (state, action: PayloadAction<RemoveFromFavoritesPayload>) => {
      const { breed, url } = action.payload;
      state.favorites[breed] = state.favorites[breed].filter(value => value !== url);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesDogsImagesSlice.actions;

export default favoritesDogsImagesSlice.reducer;
