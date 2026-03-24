import { Navigate } from 'react-router-dom';
import { AppRoute, AutorizationStatus } from '../../const';

type PrivateRouteProps ={
  autorizationStatus: AutorizationStatus;
  children: JSX.Element;
}

function PrivateRoute (props: PrivateRouteProps): JSX.Element {
  const {autorizationStatus, children} = props;
  return (
    autorizationStatus === AutorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
