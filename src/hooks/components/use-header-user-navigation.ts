/* eslint-disable react-hooks/exhaustive-deps */
import {useAuthorization} from '../services/use-authorization.ts';
import {useAppDispatch, useAppSelector} from '../services/redux.ts';
import {getUserData} from '../../store/user-process/user-process.selectors.ts';
import {getFavoriteOffers} from '../../store/favorite-data-process/favorite-data-process.selectors.ts';
import {getOfferDetailed} from '../../store/detailed-data-process/detailed-data-process.selectors.ts';
import {useCallback} from 'react';
import {fetchNearPlacesAction, fetchOfferAction, logoutAction} from '../../store/api-actions.ts';

export function useHeaderUserNavigation() {
  const isAuthorized = useAuthorization();
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserData);
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const detailedOffer = useAppSelector(getOfferDetailed);

  const handleLinkClick = useCallback(
    () => {
      dispatch(logoutAction())
        .then(() => {
          if (detailedOffer?.id) {
            dispatch(fetchOfferAction(detailedOffer.id));
            dispatch(fetchNearPlacesAction(detailedOffer.id));
          }
        });
    }, []);

  return {isAuthorized, userData, favoriteOffers, handleLinkClick};
}
