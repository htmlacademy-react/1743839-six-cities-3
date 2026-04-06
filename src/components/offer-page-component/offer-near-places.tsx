import listOffer from "../../mocks/offers";

const currentUrl = new URL(window.location.href);
const id: string = currentUrl.pathname.slice(9);
console.log(id);


const filteredNumbers = listOffer.filter(currentElement => currentElement.id === id);


console.log(listOffer[0].id);
console.log(listOffer[0].city);
console.log(filteredNumbers);




function CardNearPlace({previewImage, title}) {
  return (
    <article className="near-places__card place-card">
    <div className="near-places__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;80</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
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
      <p className="place-card__type">Room</p>
    </div>
  </article>
  );
}


function OfferNearPlaces (): JSX.Element {
  const cardsNearPlace = filteredNumbers.map((item) => (
    <CardNearPlace
      key = {item.id}
      id = {item.id}
      previewImage = {item.previewImage}
      title = {item.title}
    />
  ));
  return (
    <div className="near-places__list places__list">
     {cardsNearPlace}
    </div>
  );
}

export default OfferNearPlaces;
