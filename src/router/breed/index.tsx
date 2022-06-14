import { useParams } from 'react-router-dom';
import { Card } from 'components';
import { useStoredFavoritesImages } from 'store/hooks/useStoredFavoritesImages';
import { useStoredBreedImages } from 'store/hooks/useStoredBreedImages';
import { STATUS } from 'types';
import { useLoadOnScroll } from 'hooks/use-load-on-scroll';

const BreedPage: React.FC = () => {
  const { breed } = useParams();
  const { imagesUrls, imagesUrlsStatus } = useStoredBreedImages(breed);
  const breedImagesUrls = breed ? imagesUrls[breed] : null;
  const { favorites, addToFavorites, removeFromFavorites } = useStoredFavoritesImages();

  const visibleBreedsImages = useLoadOnScroll(breedImagesUrls, 10, 10);

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
        {visibleBreedsImages?.map(url => (
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
