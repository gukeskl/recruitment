import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Breed, DogImageUrl } from 'types';

export type BreedsState = {
  breeds: Breed[] | null;
  imagesUrls: {
    [breed: Breed]: DogImageUrl[];
  };
  randomImagesUrls: {
    [breed: Breed]: DogImageUrl;
  };
};

type SetImagesUrlsPayload = { breed: Breed; urls: DogImageUrl[] };
type SetRandomImageUrlPayload = { breed: Breed; url: DogImageUrl };

const initialState: BreedsState = {
  breeds: null,
  imagesUrls: {},
  randomImagesUrls: {},
};

export const breedsSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    setBreeds: (state, action: PayloadAction<Breed[]>) => {
      state.breeds = action.payload;
    },
    setImagesUrls: (state, action: PayloadAction<SetImagesUrlsPayload>) => {
      const { breed, urls } = action.payload;
      state.imagesUrls[breed] = urls;
    },
    setRandomImageUrl: (state, { payload }: PayloadAction<SetRandomImageUrlPayload>) => {
      const { breed, url } = payload;
      state.randomImagesUrls[breed] = url;
    },
  },
});

export const { setBreeds, setImagesUrls, setRandomImageUrl } = breedsSlice.actions;

export default breedsSlice.reducer;
