import { favoritesOffers } from '../../mocks/favorites-offers';

const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function isCityFavorite (city: string) {
  const citiesFavorite = [];
  for (let i = 0; i < favoritesOffers.length; i++) {
    if (favoritesOffers[i].isFavorite === true && favoritesOffers[i].city.name === city) {
      citiesFavorite.push(favoritesOffers[i]);
    }
  }
  return citiesFavorite;
}

const countsFavoriteCities: Array<number> = [];
for (let i = 0; i < cities.length; i++) {
  const countsFavoriteCity = isCityFavorite(cities[i]).length;
  countsFavoriteCities.push(countsFavoriteCity);
}

let countOffer = 0;
for (let i = 0; i < countsFavoriteCities.length; i++) {
  countOffer = countOffer + countsFavoriteCities[i];
}


export {isCityFavorite, cities, countOffer, countsFavoriteCities};
