import breedsApi from 'breeds-api';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store';
import { setBreeds } from 'store/slices/breeds';
import { STATUS } from 'types';

const { IDLE, FETCHING, SUCCESS, FAILURE } = STATUS;

export const useStoredBreeds = () => {
  const dispatch = useDispatch();
  const { breeds } = useAppSelector(store => ({ ...store.breeds }));
  const [breedsStatus, setBreedsStatus] = useState<STATUS>(IDLE);

  useEffect(() => {
    if (!breeds) {
      setBreedsStatus(FETCHING);
      breedsApi
        .getBreedsList()
        .then(breeds => {
          dispatch(setBreeds(breeds));
          setBreedsStatus(SUCCESS);
        })
        .catch(() => {
          setBreedsStatus(FAILURE);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    breeds,
    breedsStatus,
  };
};
