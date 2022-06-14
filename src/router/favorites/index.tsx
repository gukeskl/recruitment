import { Card } from 'components';
import { useLoadOnScroll } from 'hooks/use-load-on-scroll';
import { useState } from 'react';
import { useStoredFavoritesImages } from 'store/hooks/useStoredFavoritesImages';

const SELECT_ALL_OPTION = 'all';

const FavoritesPage: React.FC = () => {
  const { favorites } = useStoredFavoritesImages();
  const [selectedBreed, setSelectedBreed] = useState<string>(SELECT_ALL_OPTION);

  const breedsThatContainFavorites = Object.entries(favorites)
    .filter(([, images]) => images.length !== 0)
    .map(([breed]) => breed);

  const filteredFavoritesImages =
    selectedBreed === SELECT_ALL_OPTION ? Object.values(favorites).flatMap(urls => urls) : favorites[selectedBreed];

  const visibleFavoritesImages = useLoadOnScroll(filteredFavoritesImages, 10, 10);

  if (filteredFavoritesImages.length === 0)
    return <div className='container has-text-centered p-4'>NO FAVORITES IMAGES</div>;

  return (
    <div className='container p-4'>
      <div className='level'>
        <p className='level-item'>
          <strong>Favorites</strong>
        </p>

        <p className='level-item'>
          <div className='select'>
            <select onChange={e => setSelectedBreed(e.target.value)}>
              <option value={SELECT_ALL_OPTION}>all</option>
              {breedsThatContainFavorites.map(breed => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </div>
        </p>
      </div>
      <div className='columns is-multiline is-centered'>
        {visibleFavoritesImages?.map(url => (
          <div key={url} className='column is-one-third is-one-quarter-fullhd'>
            <Card imageUrl={url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
