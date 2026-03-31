import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { AutorizationStatus, AppRoute } from '../../const';

type NumberOfProposals = {
  offersCount: number;
}


function App ({offersCount}: NumberOfProposals): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route
            index
            element={<MainPage offersCount={offersCount}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={(
              <PrivateRoute autorizationStatus = {AutorizationStatus.Auth}>
                <FavoritesPage />
              </PrivateRoute>
            )}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
