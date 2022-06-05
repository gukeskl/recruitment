import breedsApi from 'breeds-api';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store';
import { setImagesUrls } from 'store/slices/breeds';
import { Breed, STATUS } from 'types';

const { IDLE, FETCHING, SUCCESS, FAILURE } = STATUS;

export const useStoredBreedImages = (breed?: Breed) => {
  const dispatch = useDispatch();
  const { imagesUrls } = useAppSelector(store => ({ ...store.breeds }));
  const [imagesUrlsStatus, setImagesUrlsStatus] = useState(IDLE);

  useEffect(() => {
    if (breed && !imagesUrls[breed]) {
      setImagesUrlsStatus(FETCHING);
      breedsApi
        .getDogsImages(breed)
        .then(urls => {
          dispatch(setImagesUrls({ breed, urls }));
          setImagesUrlsStatus(SUCCESS);
        })
        .catch(() => {
          setImagesUrlsStatus(FAILURE);
        });
    }
  }, [breed, dispatch, imagesUrls]);

  return {
    imagesUrls,
    imagesUrlsStatus,
  };
};
