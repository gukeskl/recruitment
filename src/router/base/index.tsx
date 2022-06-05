import { useNavigate } from 'react-router-dom';
import { Card } from 'components';
import { useStoredBreeds } from 'store/hooks/useStoredBreeds';
import { useStoredRandomImages } from 'store/hooks/useStoredRandomImages';
import { PATH } from 'router/paths';
import { STATUS } from 'types';

const BasePage: React.FC = () => {
  const navigate = useNavigate();
  const { breeds, breedsStatus } = useStoredBreeds();
  const { randomImagesUrls } = useStoredRandomImages();

  if (breedsStatus === STATUS.FETCHING) return <>LOADING</>;
  if (breedsStatus === STATUS.FAILURE) return <>ERROR!</>;

  return (
    <div className='container p-4'>
      <div className='level is-flex is-justify-content-right'>
        <button className='button' onClick={() => navigate(PATH.FAVORITES)}>
          FAVORITES
        </button>
      </div>
      <div className='columns is-multiline is-centered'>
        {breeds?.map(breed => (
          <div key={breed} className='column is-one-third is-one-quarter-fullhd'>
            <Card title={breed} imageUrl={randomImagesUrls[breed]} onClick={() => navigate(`/${breed}`)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasePage;
