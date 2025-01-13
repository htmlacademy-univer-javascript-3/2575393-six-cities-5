import {store} from '../store';
import {AuthStatus, SortingOrder} from '../const.ts';
import {Nullable} from './nullable.ts';
import {UserData} from './user-data.ts';
import {OffersShort} from './offers/offer-short.ts';
import {City} from './city.ts';
import {RequestStatus} from './request-status.ts';
import {OfferDetailed} from './offers/offer-detailed.ts';
import {Reviews} from './review.ts';

export type UserProcess = {
  authorizationStatus: AuthStatus;
  userData: Nullable<UserData>;
};

export type DataProcess = {
  activeCity: City;
  offers: OffersShort;
  hoverCardId: Nullable<string>;
  sortingOrder: SortingOrder;
}

export type DetailedDataProcess = {
  offerDetailed: Nullable<OfferDetailed>;
  nearPlaces: OffersShort;
  reviews: Reviews;
}

export type RequestProcess = {
  requestStatus: RequestStatus;
}

export type FavoriteDataProcess = {
  favoriteOffers: OffersShort;
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
