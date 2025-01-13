import {RootState} from '../../types/state.ts';
import {SortingOrder, StoreNameSpace} from '../../const.ts';
import {City} from '../../types/city.ts';
import {OfferShort, OffersShort} from '../../types/offers/offer-short.ts';
import {Nullable} from '../../types/nullable.ts';

export const getActiveCity = (state: RootState): City => state[StoreNameSpace.Data].activeCity;
export const getOffers = (state: RootState): OffersShort => state[StoreNameSpace.Data].offers;
export const getHoverCardId = (state: RootState): Nullable<OfferShort['id']> => state[StoreNameSpace.Data].hoverCardId;
export const getSortingOrder = (state: RootState): SortingOrder => state[StoreNameSpace.Data].sortingOrder;
