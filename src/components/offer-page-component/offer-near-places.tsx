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
  images: string[];
}

type Cart<T = CardProps> = {
  temps: T[];
}

function Premium () {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

function CardNearPlace({images, title, price, type, rating, isFavorite, isPremium, id}: CardProps): JSX.Element {
  const star = (`${Math.round(rating) * 20}%`);
  const classFavorite = `place-card__bookmark-button button
  ${isFavorite ? 'place-card__bookmark-button--active' : ''}
  `;
  return (
    <article className="near-places__card place-card" >
      {isPremium ? <Premium /> : ''}
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={images} width="260" height="200" alt="Place image" />
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
            <span className="visually-hidden">In bookmarks</span>
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
          <a href="#">
            {title}
          </a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

function OfferNearPlaces ({temps}: Cart<CardProps> = {temps: []}): JSX.Element {
  const cardsNearPlace = temps.map((item) => (
    <CardNearPlace
      key = {item.id}
      id = {item.id}
      images= {item.images[0]}
      title = {item.title}
      price = {item.price}
      type = {item.type
        .split(' ')
        .map((element) => `${element[0].toUpperCase()}${element.slice(1).toLowerCase()}`)
        .join(' ')}
      rating = {item.rating}
      isPremium = {item.isPremium}
      isFavorite = {item.isFavorite}
    />
  ));
  return (
    <div className="near-places__list places__list">
      {cardsNearPlace}
    </div>
  );
}

export default OfferNearPlaces;
