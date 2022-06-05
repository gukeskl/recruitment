import { AiFillHeart } from 'react-icons/ai';

type CardProps = {
  title: string;
  imageUrl: string;
  isClickable?: boolean;
  onClick?: () => void;
  isLikeable?: boolean;
  isLiked?: boolean;
  onLike?: () => void;
};

export const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  isLiked,
  isClickable,
  isLikeable,
  onClick,
  onLike = () => null,
}) => (
  <div onClick={onClick} className={`card ${isClickable ? 'is-clickable' : ''}`} style={{ position: 'relative' }}>
    <div className='card-image'>
      <figure className='image is-4by3'>
        <img src={imageUrl} alt='Placeholder image' />
      </figure>
    </div>
    <div className='card-content'>
      <div className='media'>
        <div className='media-content'>
          <p className='title is-5'>{title}</p>
        </div>
      </div>
    </div>
    {isLikeable && (
      <button
        className='button m-2 p-2'
        style={{ position: 'absolute', right: '0px', top: '0px' }}
        onClick={e => {
          e.stopPropagation();
          onLike();
        }}
      >
        <AiFillHeart color={isLiked ? 'pink' : 'grey'} size={30} />
      </button>
    )}
  </div>
);
