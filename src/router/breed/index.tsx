import { useParams } from 'react-router-dom';
import { Card } from 'components';

const BreedPage: React.FC = () => {
  const { breed } = useParams();

  return (
    <div className='container p-4'>
      <div className='columns is-multiline is-centered'>
        <div className='column is-one-third is-one-quarter-fullhd'>
          <Card
            title={breed || 'ups'}
            imageUrl='https://images.dog.ceo/breeds/corgi-cardigan/n02113186_9615.jpg'
            isLikeable={true}
            isLiked={true}
            onLike={() => console.log('like')}
          />
        </div>
      </div>
    </div>
  );
};

export default BreedPage;
