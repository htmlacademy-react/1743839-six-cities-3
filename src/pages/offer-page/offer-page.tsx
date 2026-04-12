import { statusAutorization } from '../../components/const';
import {Link} from 'react-router-dom';
import { detailedOffers } from '../../mocks/detailed-offer';
import OfferGallery from '../../components/offer-page-component/offer-gallery';
import OfferInsideList from '../../components/offer-page-component/offer-inside-list';
import OfferComments from '../../components/offer-page-component/offer-comments';
import OfferForm from '../../components/offer-page-component/offer-form';
import OfferNearPlaces from '../../components/offer-page-component/offer-near-places';
import { comments } from '../../mocks/reviews';
import { countOffer } from '../../components/favorites-page-component/favorites-offers';


const users = detailedOffers;
let countComments;

function AuthorizedUserHeader () {
  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to='/favorites'>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
          <span className="header__favorite-count">{countOffer}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a className="header__nav-link" href="#">
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </>
  );
}

function AuthorizedUserMain () {
  return (
    <OfferForm />
  );
}

function UnauthorizedUser () {
  return (
    <li className="header__nav-item user">
      <a className="header__nav-link header__nav-link--profile" href="#">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__login">Sign in</span>
      </a>
    </li>
  );
}

function findUserById(id:string) {
  return users.find((user) => user.id === id);
}

function Premium () {
  return (
    <div className="offer__mark">
      <span>Premium</span>
    </div>
  );
}

function Pro () {
  return (
    <span className="offer__user-status">
      Pro
    </span>
  );
}

function CountRewies (id: string): number {
  const comment = comments.find((item) => item.id === id);
  if (comment === undefined) {
    countComments = 0;
  } else {
    countComments = comment?.reviews.length;
  }
  return countComments;
}


function OfferPage () {
  const currentUrl = new URL(window.location.href);
  const id: string = currentUrl.pathname.slice(7);
  const user = (findUserById(id));
  const star = (`${Math.round(user.rating) * 20}%`);
  const classFavorite = `offer__bookmark-button button
  ${user?.isFavorite ? 'offer__bookmark-button--active button' : ''}
  `;
  countComments = CountRewies(id);

  const nearbyCities = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].id !== id) {
      nearbyCities.push(users[i]);
    }
  }
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {statusAutorization === 'AUTH' ? <AuthorizedUserHeader /> : <UnauthorizedUser />}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <OfferGallery ts={user?.images} />
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {user?.isPremium ? <Premium /> : ''}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {user?.title}
                </h1>
                <button className={classFavorite} type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span
                    style={{
                      width: star
                    }}
                  >
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{user?.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {user.type
                    .split(' ')
                    .map((element) => `${element[0].toUpperCase()}${element.slice(1).toLowerCase()}`)
                    .join(' ')}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {user?.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {user?.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{user?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <OfferInsideList ti={user?.goods} />
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className=
                    {user?.host.isPro ?
                      'offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper' :
                      'offer__avatar-wrapper offer__avatar-wrapper user__avatar-wrapper'}
                  >
                    <img className="offer__avatar user__avatar" src={user?.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {user?.host.name}
                  </span>
                  {user?.host.isPro ? <Pro /> : ''}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {user?.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{countComments}</span></h2>
                {countComments === 0 ? '' : <OfferComments id={id} array = {comments}/>}
                {statusAutorization === 'AUTH' ? <AuthorizedUserMain /> : ''}
              </section>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferNearPlaces temps = {nearbyCities}/>
          </section>
        </div>
      </main>
    </div>
  );
}


export default OfferPage;
