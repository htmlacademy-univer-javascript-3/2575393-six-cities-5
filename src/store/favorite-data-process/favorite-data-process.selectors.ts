import {RootState} from '../../types/state.ts';
import {OffersShort} from '../../types/offers/offer-short.ts';
import {StoreNameSpace} from '../../const.ts';

export const getFavoriteOffers = (state: RootState): OffersShort => state[StoreNameSpace.FavoriteData].favoriteOffers;
