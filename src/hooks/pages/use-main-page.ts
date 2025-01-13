/* eslint-disable react-hooks/exhaustive-deps */
import {useAppDispatch, useAppSelector} from '../services/redux.ts';
import {Points} from '../../types/point.ts';
import {useEffect} from 'react';
import {getActiveCity, getOffers} from '../../store/data-process/data-process.selectors.ts';
import {dropAllDetailedData} from '../../store/detailed-data-process/detailed-data-process.slice.ts';
import {setRequestStatus} from '../../store/request-condition-process/request-condition-process.slice.ts';
import {RequestStatus} from '../../types/request-status.ts';
import classNames from 'classnames';

export function useMainPage() {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(getActiveCity);
  const offersRaw = useAppSelector(getOffers);
  const offersByCity = offersRaw.filter((offer) => offer.city.name === activeCity.name);
  const points: Points = offersByCity.map(({location, id}) => ({id, location}));
  const offersIsEmpty = offersByCity.length === 0;
  const mainClassName = classNames('page__main page__main--index', {'page__main--index-empty': offersIsEmpty});


  useEffect(() => {
    dispatch(dropAllDetailedData());
    dispatch(setRequestStatus(RequestStatus.Idle));
  }, []);

  return {activeCity, offersByCity, points, offersIsEmpty, mainClassName};
}
