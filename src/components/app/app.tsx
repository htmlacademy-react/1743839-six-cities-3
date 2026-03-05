import MainPage from '../../pages/main-page/main-page';

type NumberOfProposals = {
  offersCount: number;
}


function App ({offersCount}: NumberOfProposals): JSX.Element {
  return (
    <MainPage offersCount={offersCount}/>
  );
}

export default App;
