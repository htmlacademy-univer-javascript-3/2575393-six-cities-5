/* eslint-disable react-refresh/only-export-components */
import {useAppSelector} from '../../hooks/services/redux.ts';
import LocationCityTab from './location-city-tab.tsx';
import {CityObject} from '../../const.ts';
import {City} from '../../types/city.ts';
import {memo} from 'react';
import {getActiveCity} from '../../store/data-process/data-process.selectors.ts';

function CitiesTabs(): JSX.Element {
  const activeCity = useAppSelector(getActiveCity);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CityObject).map((city : City) =>
            <LocationCityTab city={city} isActive={city.name === activeCity.name} key={city.location.latitude}/>)}
        </ul>
      </section>
    </div>
  );
}

export default memo(CitiesTabs);
