import { useParams } from 'react-router-dom';

const BreedPage: React.FC = () => {
  const { breed } = useParams();

  return <>{breed}</>;
};

export default BreedPage;
