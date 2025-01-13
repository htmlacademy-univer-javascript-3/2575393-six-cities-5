import Header from '../../components/header/header.tsx';
import {AppRoute} from '../../const.ts';
import {Navigate} from 'react-router-dom';
import {getRandomCity} from '../../utils.ts';
import {useAuthorization} from '../../hooks/services/use-authorization.ts';
import LoginForm from '../../components/login-form/login-form.tsx';
import LocationCityTab from '../../components/cities-tabs/location-city-tab.tsx';
import {ReactNode} from 'react';

function LoginPage(): ReactNode {
  const isAuthorized = useAuthorization();
  const randomCity = getRandomCity();

  if (isAuthorized) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="page page--gray page--login">
      <Header disableAuthNav/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <section className="locations locations--login locations--current">
            <LocationCityTab city={randomCity} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
