import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import './not-found-page.css';

function NotFoundPage(): JSX.Element {
  return (
    <main className='page page--not-found'>
      <section className='page--not-found__left-section cities__no-places'>
        <p>Error 404, page not found</p>
        <Link to={AppRoute.Main}>
          <button className='page--not-found__to-main-button'>На главную</button>
        </Link>
      </section>
      <section className='page--not-found__right-section'>
        <div className='page--not-found__image'></div>
      </section>
    </main>
  );
}

export default NotFoundPage;
