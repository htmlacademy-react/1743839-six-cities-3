import {Link} from 'react-router-dom';
import { favoritesOffers } from '../../mocks/favorites-offers';

const city = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function isCity (city) {
  const arrayCity = [];
  for (let i = 0; i < favoritesOffers.length; i++) {
    if (favoritesOffers[i].isFavorite === true && favoritesOffers[i].city.name === city) {
      arrayCity.push(favoritesOffers[i]);
    }
  }
  return arrayCity;
}

const jj = [];
for (let i = 0; i < city.length; i++) {
  const x = isCity(city[i]).length;
  jj.push(x);
}
//console.log(jj);

let countOffer = 0;
for (let i = 0; i < jj.length; i++) {
  countOffer = countOffer + jj[i];
}
//console.log(countOffer);

const a = [];
for (let i = 0; i < city.length; i++) {
  const b = {};
  b.id = i;
  b.city = city[i];
  b.length = jj[i];
  a.push(b);
}

function Fn (a, b) {
  return b.length - a.length;
}

const vvv = a.sort(Fn);
console.log(vvv);

const rte = isCity('Amsterdam');
console.log(rte);

const tyu = isCity('Paris');
console.log(tyu);

//console.log(vvv[0].city);


function RT () {
  const u = vvv.map((item) => (
    <Waq
      j = {item.city}
      k={item.length}
    />
  ));
  return (
    <>
      {u}
    </>
  );
}


function Waq ({j, k}) {
  const z = j;
  console.log(z);
  const zz = k;
  console.log(zz);
  return (
    zz > 0 ?
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{z}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          <Waq1 N = {z} />
        </div>
      </li>
      : <></>
  );
}

function Waq1 ({N}) {
  const cards = isCity(N).map((item)=>(
    <Waq2
      key={item.id}
      url={item.previewImage}
      price={item.price}
      title={item.title}
      isPremium={item.isPremium}
      type={item.type
        .split(' ')
        .map((element) => `${element[0].toUpperCase()}${element.slice(1).toLowerCase()}`)
        .join(' ')}
      rating={item.rating}
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

function Waq2 ({url, price, title, isPremium, type, rating}) {
  const star = (`${Math.round(rating) * 20}%`);
  return (
    <article className="favorites__card place-card">
      {isPremium ? <Premium /> : ''}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={url} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
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


function FavoritesEmptyPage () {
  return (
    <section className="favorites favorites--empty">
      <h1 className="visually-hidden">Favorites (empty)</h1>
      <div className="favorites__status-wrapper">
        <b className="favorites__status">Nothing yet saved.</b>
        <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
      </div>
    </section>
  );
}

function FavoritesMainPage () {


  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>

      <ul className="favorites__list">
        <RT />
      </ul>

    </section>
  );
}

function FavoritesPage () {

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
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{countOffer}</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {countOffer === 0 ? <FavoritesEmptyPage /> : <FavoritesMainPage />}
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
