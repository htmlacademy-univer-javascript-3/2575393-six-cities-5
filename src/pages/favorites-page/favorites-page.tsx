import Header from '../../components/header/header.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import FavoritesList from '../../components/favorites-list/favorites-list.tsx';
import {useAppSelector} from '../../hooks/services/redux.ts';
import {getFavoriteOffers} from '../../store/favorite-data-process/favorite-data-process.selectors.ts';
import classNames from 'classnames';
import EmptyFavorites from '../../components/empty-favorites/empty-favorites.tsx';

function FavoritesPage() : JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isFavoritesEmpty = favoriteOffers.length === 0;
  const mainClassName = classNames('page__main page__main--favorites', {'page__main--favorites-empty': isFavoritesEmpty});

  return (
    <div className="page">
      <Header />
      <main className={mainClassName}>
        <div className="page__favorites-container container">
          {isFavoritesEmpty && <EmptyFavorites />}
          {!isFavoritesEmpty &&
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList allFavorites={favoriteOffers}/>
            </section>}
        </div>
      </main>
      <footer className="footer container">
        <Link className='footer__logo-link' to={AppRoute.Main}>
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
