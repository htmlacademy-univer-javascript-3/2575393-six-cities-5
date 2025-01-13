/* eslint-disable react-hooks/exhaustive-deps */
import {OffersShort} from '../../types/offers/offer-short.ts';
import OfferCard from '../offer/offer-card/offer-card.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {getCityObjectByName} from '../../utils.ts';
import {useAppDispatch} from '../../hooks/services/redux.ts';
import {setActiveCity} from '../../store/data-process/data-process.slice.ts';
import {useCallback} from 'react';

type FavoritesListElementProps = {
  favoritesAtCity: OffersShort;
  cityName: string;
}

function FavoritesListElement({favoritesAtCity, cityName}: FavoritesListElementProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleLinkOnClick = useCallback (() => {
    const city = getCityObjectByName(cityName);
    if (city) {
      dispatch(setActiveCity(city));
    }
  }, []);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main} onClick={handleLinkOnClick}>
            <span>{cityName}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoritesAtCity.map((offer) => (
          <OfferCard key={offer.id} offerInfo={offer} variant={'favorites'}/>
        ))}
      </div>
    </li>
  );
}

export default FavoritesListElement;
