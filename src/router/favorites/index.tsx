import { Card } from 'components';
import { useStoredFavoritesImages } from 'store/hooks/useStoredFavoritesImages';

const FavoritesPage: React.FC = () => {
  const { favorites } = useStoredFavoritesImages();

  if (favorites.length === 0) return <div className='container has-text-centered p-4'>NO FAVORITES IMAGES</div>;

  return (
    <div className='container p-4'>
      <div className='level'>
        <p className='level-item has-text-centered'>
          <strong>Favorites</strong>
        </p>
      </div>
      <div className='columns is-multiline is-centered'>
        {favorites.map(url => (
          <div key={url} className='column is-one-third is-one-quarter-fullhd'>
            <Card imageUrl={url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
