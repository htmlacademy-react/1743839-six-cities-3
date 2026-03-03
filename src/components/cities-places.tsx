import CitiesCard from './cities-card';
import { options } from './const';


const placesOptions = options.map((option: string) => <li className="places__option" tabIndex="0">{option}</li>);


function CitiesPlaces () {
  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">3312 places to stay in Amsterdam</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
        Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          {placesOptions}
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        <CitiesCard />
      </div>
    </>
  );
}

export default CitiesPlaces;
