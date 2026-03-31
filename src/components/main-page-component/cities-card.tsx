//import { temps } from '../const';
//import listOffer from '../../mocks/offers';
import {Link} from 'react-router-dom';


function Premium () {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

type CardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

function Card({previewImage, title, type, price, isPremium, rating, isFavorite, id}: CardProps): JSX.Element {
  const star = (`${Math.round(rating) * 20}%`);
  const classFavorite = `place-card__bookmark-button button
  ${isFavorite ? 'place-card__bookmark-button--active' : ''}
  `;
/*
  const handleMouseOver = () => {
    console.log('Mouse detected!');
  };
*/
  let idOffer = '';
  const handleClick = () => {
    idOffer = `offer/id${ id}`;
    return idOffer;
  };

  const rrr = `offer/id${ id}`;

  return (
    <article className="cities__card place-card"
      //onMouseOver={handleMouseOver}
      onClick={handleClick}
    >
      {isPremium ? <Premium /> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={rrr}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={classFavorite} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: star
              }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

type Cart<T = CardProps> = {
  temps: T[];
}

function CitiesCard ({temps}: Cart<CardProps> = {temps: []}): JSX.Element {
  const cards = temps.map((item) => (
    <Card
      key = {item.id}
      id = {item.id}
      previewImage = {item.previewImage}
      title = {item.title}
      type = {item.type
        .split(' ')
        .map((element) => `${element[0].toUpperCase()}${element.slice(1).toLowerCase()}`)
        .join(' ')}
      price = {item.price}
      isPremium = {item.isPremium}
      rating = {item.rating}
      isFavorite = {item.isFavorite}
    />
  ));
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards}
    </div>
  );
}


export default CitiesCard;

