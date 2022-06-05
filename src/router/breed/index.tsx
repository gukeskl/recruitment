import { useParams } from 'react-router-dom';
import { Card } from 'components';
import { useStoredFavoritesImages } from 'store/hooks/useStoredFavoritesImages';
import { useStoredBreedImages } from 'store/hooks/useStoredBreedImages';
import { STATUS } from 'types';

const BreedPage: React.FC = () => {
  const { breed } = useParams();
  const { imagesUrls, imagesUrlsStatus } = useStoredBreedImages(breed);
  const { favorites, addToFavorites, removeFromFavorites } = useStoredFavoritesImages();

  if (imagesUrlsStatus === STATUS.FETCHING) return <>LOADING</>;
  if (imagesUrlsStatus === STATUS.FAILURE || !breed) return <>ERROR</>;

  return (
    <div className='container p-4'>
      <div className='level'>
        <p className='level-item has-text-centered'>
          <strong>{breed}</strong>
        </p>
      </div>
      <div className='columns is-multiline is-centered'>
        {imagesUrls[breed]?.map(url => (
          <div key={url} className='column is-one-third is-one-quarter-fullhd'>
            <Card
              imageUrl={url}
              isLikeable={true}
              isLiked={favorites[breed]?.some(v => v === url)}
              onLike={isLiked => (isLiked ? addToFavorites({ url, breed }) : removeFromFavorites({ url, breed }))}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreedPage;
