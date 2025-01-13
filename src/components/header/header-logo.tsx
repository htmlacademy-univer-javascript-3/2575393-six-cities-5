import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import classNames from 'classnames';

type HeaderLogoProps = {
  isActive?: boolean;
}

function HeaderLogo({isActive} : HeaderLogoProps) : JSX.Element {
  const className = classNames('header__logo-link' , {'header__logo-link--active' : isActive});

  return (
    <div className="header__left">
      <Link to={AppRoute.Main} className={className}>
        <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
      </Link>
    </div>
  );
}

export default HeaderLogo;
