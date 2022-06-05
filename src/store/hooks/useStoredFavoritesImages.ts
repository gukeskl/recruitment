import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store';
import { addToFavorites, removeFromFavorites } from 'store/slices/favoritesImages';
import { DogImageUrl } from 'types';

export const useStoredFavoritesImages = () => {
  const dispatch = useDispatch();
  const favorites = useAppSelector(store => store.favoritesImages.favorites);

  return {
    favorites,
    addToFavorites: (url: DogImageUrl) => dispatch(addToFavorites(url)),
    removeFromFavorites: (url: DogImageUrl) => dispatch(removeFromFavorites(url)),
  };
};
