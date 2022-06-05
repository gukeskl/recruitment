import breedsApi from 'breeds-api';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store';
import { setRandomImageUrl } from 'store/slices/breeds';

export const useStoredRandomImages = () => {
  const dispatch = useDispatch();
  const { breeds, randomImagesUrls } = useAppSelector(store => ({ ...store.breeds }));

  useEffect(() => {
    breeds?.forEach(async breed => {
      if (!randomImagesUrls[breed]) {
        const url = await breedsApi.getRandomDogImage(breed);
        dispatch(setRandomImageUrl({ breed, url }));
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breeds, dispatch]);

  return {
    randomImagesUrls,
  };
};
