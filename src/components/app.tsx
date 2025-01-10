import MainScreen from '../pages/main.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const';
import Login from '../pages/login.tsx';
import Favourites from '../pages/favourites.tsx';
import Offer from '../pages/offer.tsx';
import NotFound from '../pages/not_found.tsx';
import PrivateRoute from './private-route.tsx';

type AppProps = {
  offersNumber: number;
}

function App({offersNumber}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen offersNumber={offersNumber}/>}/>
        <Route path={AppRoute.Login} element={<Login/>}/>
        <Route
          path={AppRoute.Favourites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favourites/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<Offer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
