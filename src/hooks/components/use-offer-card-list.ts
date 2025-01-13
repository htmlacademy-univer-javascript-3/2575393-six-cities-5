/* eslint-disable react-hooks/exhaustive-deps */
import {OfferCardListVariants} from '../../types/variants.ts';
import {useCallback} from 'react';
import {Nullable} from '../../types/nullable.ts';
import {setHoverCardId} from '../../store/data-process/data-process.slice.ts';
import {useAppDispatch} from '../services/redux.ts';

type OfferCardListController = {
  variant: OfferCardListVariants;
}

const variantData = {
  main: {
    sectionClassName: 'cities__places places',
    headerClassName: 'visually-hidden',
    headerContent: 'Places',
    isHeaderActive: true,
    isFoundActive: true,
    isFormActive: true,
    containerClassName: 'cities__places-list places__list tabs__content',
  },
  nearby: {
    sectionClassName: 'near-places places',
    headerClassName: 'near-places__title',
    headerContent: 'Other places in the neighbourhood',
    isHeaderActive: true,
    isFoundActive: false,
    isFormActive: false,
    containerClassName: 'near-places__list places__list',
  },
};

export function useOfferCardList({variant}: OfferCardListController) {
  const dispatch = useAppDispatch();
  const handleHoverCard = useCallback((id: Nullable<string>) => dispatch(setHoverCardId(id)), []);

  return {...variantData[variant], handleHoverCard};
}
