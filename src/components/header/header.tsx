/* eslint-disable react-refresh/only-export-components */
import HeaderLogo from './header-logo.tsx';
import HeaderUserNavigation from './header-user-navigation.tsx';
import {memo} from 'react';

type HeaderProps = {
  disableAuthNav?: boolean;
  logoActive?: boolean;
}

function Header({disableAuthNav, logoActive}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo isActive={logoActive}/>
          {disableAuthNav ? ' ' : <HeaderUserNavigation/>}
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
