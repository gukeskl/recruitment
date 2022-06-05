import { useNavigate } from 'react-router-dom';
import { Card } from 'components';

const BasePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='container p-4'>
      <div className='level is-flex is-justify-content-right'>
        <button className='button'>FAVORITES</button>
      </div>
      <div className='columns is-multiline is-centered'>
        <div className='column is-one-third is-one-quarter-fullhd'>
          <Card
            title='name'
            imageUrl='https://images.dog.ceo/breeds/corgi-cardigan/n02113186_9615.jpg'
            onClick={() => navigate('/name')}
          />
        </div>
      </div>
    </div>
  );
};

export default BasePage;
