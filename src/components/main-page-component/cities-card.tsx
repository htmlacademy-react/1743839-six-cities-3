import {Link} from 'react-router-dom';
import { useState } from 'react';

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

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <article onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={!isHovering ? 'cities__card place-card' : 'cities__card place-card--active'}>
      {isPremium ? <Premium /> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
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
          <Link to={`offer/${id}`}>
            {title}
          </Link>
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

