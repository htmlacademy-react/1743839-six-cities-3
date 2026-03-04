import MainPage from '../../pages/main-page/main-page';
import { offersCount } from '../const';

function App (): JSX.Element {
  return (
    <MainPage offersCount={offersCount}/>
  );
}

export default App;
