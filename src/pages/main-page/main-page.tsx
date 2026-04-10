import Cities from '../../components/main-page-component/cities';
import {Header} from '../../components/main-page-component/header';
import CitiesPlaces from '../../components/main-page-component/cities-places';
import Map from '../../components/main-page-component/map';

type NumberOfProposals = {
  offersCount: number;
}

function MainPage ({offersCount}: NumberOfProposals): JSX.Element {
  return (
    <div className = "page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Cities />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <CitiesPlaces offersCount={offersCount}/>
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
