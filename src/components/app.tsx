import MainScreen from '../pages/main.tsx';

type AppProps = {
  offersNumber: number;
}

function App({offersNumber}: AppProps): JSX.Element {
  return (<MainScreen offersNumber={offersNumber}/>);
}

export default App;
