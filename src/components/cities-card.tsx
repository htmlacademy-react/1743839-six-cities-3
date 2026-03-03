import { temps } from "./const";

function CitiesCard () {
  const cards = temps.map((item) => (
    <Card
      key = {item.id}
      url = {item.previewImage}
      title = {item.title}
      type = {item.type}
      price = {item.price}
      isPremium = {item.isPremium}
    />
  ));
  return (
    <>
      {cards}
    </>
  );
}

function Premium () {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}


function Card({url, title, type, price, isPremium}) {
  return (
    <article className="cities__card place-card">
      {isPremium ? <Premium /> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={url} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
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

export default CitiesCard;
