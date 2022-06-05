import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store';
import {
  addToFavorites,
  AddToFavoritesPayload,
  removeFromFavorites,
  RemoveFromFavoritesPayload,
} from 'store/slices/favoritesImages';

export const useStoredFavoritesImages = () => {
  const dispatch = useDispatch();
  const favorites = useAppSelector(store => store.favoritesImages.favorites);

  return {
    favorites,
    addToFavorites: (payload: AddToFavoritesPayload) => dispatch(addToFavorites(payload)),
    removeFromFavorites: (payload: RemoveFromFavoritesPayload) => dispatch(removeFromFavorites(payload)),
  };
};
