/* eslint-disable react-hooks/exhaustive-deps */
import {useAppDispatch, useAppSelector} from '../services/redux.ts';
import {useEffect, useState} from 'react';
import {fetchOffersAction} from '../../store/api-actions.ts';
import {SortComparisons, SortingOrder} from '../../const.ts';
import {getOffers, getSortingOrder} from '../../store/data-process/data-process.selectors.ts';
import {setOffers} from '../../store/data-process/data-process.slice.ts';


export function useDropdownOffersFilter() {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getOffers);
  const currentSortingOrder = useAppSelector(getSortingOrder);
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);

  const handleSortingOnClick = () => setDropdownIsOpen((value) => !value);

  useEffect(() => {
    if (currentSortingOrder === SortingOrder.popular && offers.length !== 0) {
      dispatch(fetchOffersAction());
    } else if (offers.length !== 0) {
      dispatch(setOffers(offers.toSorted(SortComparisons[currentSortingOrder])));
    }
  }, [currentSortingOrder]);

  return {handleSortingOnClick, currentSortingOrder, dropdownIsOpen, setDropdownIsOpen};
}
