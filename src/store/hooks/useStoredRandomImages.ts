import breedsApi from 'breeds-api';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store';
import { setRandomImageUrl } from 'store/slices/breeds';
import { Breed } from 'types';

export const useStoredRandomImages = () => {
  const dispatch = useDispatch();
  const { randomImagesUrls } = useAppSelector(store => ({ ...store.breeds }));

  const fetchRandomImagesUrls = useCallback(
    async (breeds: Breed[]) => {
      breeds?.forEach(async breed => {
        if (!randomImagesUrls[breed]) {
          const url = await breedsApi.getRandomDogImage(breed);
          dispatch(setRandomImageUrl({ breed, url }));
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  return {
    randomImagesUrls,
    fetchRandomImagesUrls,
  };
};
