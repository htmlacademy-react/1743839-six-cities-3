import {citiesData} from '../components/const';

const citiesActive: number[] = [4];

function City ({city, isCitiesActive = true}): JSX.Element {
  const classCity = `locations__item-link tabs__item" href="#"
  ${isCitiesActive ? 'tabs__item--active' : 'href="#"'}
  `;
  return (
    <li className="locations__item">
      <a className={classCity}>
        <span>{city}</span>
      </a>
    </li>
  );
}


function Cities (): JSX.Element {
  const cities = citiesData.map((item) => (
    <City
      key = {item.id}
      city = {item.city}
      isCitiesActive = {citiesActive.includes(item.id)}
    />
  ));
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities}
      </ul>
    </section>
  );
}


export default Cities;
