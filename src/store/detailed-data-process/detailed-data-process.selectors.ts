import {RootState} from '../../types/state.ts';
import {StoreNameSpace} from '../../const.ts';
import {OfferDetailed} from '../../types/offers/offer-detailed.ts';
import {Nullable} from '../../types/nullable.ts';
import {Reviews} from '../../types/review.ts';
import {OffersShort} from '../../types/offers/offer-short.ts';

export const getOfferDetailed = (state: RootState): Nullable<OfferDetailed> => state[StoreNameSpace.DetailedData].offerDetailed;
export const getReviews = (state: RootState): Reviews => state[StoreNameSpace.DetailedData].reviews;
export const getNearPlaces = (state: RootState): OffersShort => state[StoreNameSpace.DetailedData].nearPlaces;
