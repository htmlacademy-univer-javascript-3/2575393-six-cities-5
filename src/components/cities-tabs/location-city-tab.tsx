import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import classNames from 'classnames';
import {City} from '../../types/city.ts';
import {useAppDispatch} from '../../hooks/services/redux.ts';
import {setActiveCity} from '../../store/data-process/data-process.slice.ts';

type CityTabProps = {
  city: City;
  isActive?: boolean;
}

function LocationCityTab({city, isActive}: CityTabProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleTabClick = () => dispatch(setActiveCity(city));
  const linkClassName = classNames('locations__item-link tabs__item', {'tabs__item--active': isActive});
  return (
    <li className="locations__item" key={city.name}>
      <Link
        to={AppRoute.Main}
        className={linkClassName}
        onClick={handleTabClick}
      >
        <span>{city.name}</span>
      </Link>
    </li>
  );
}

export default LocationCityTab;
