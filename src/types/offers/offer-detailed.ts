import {UserData} from '../user-data.ts';
import {OfferShort} from './offer-short.ts';

export type OfferDetailed = Omit<OfferShort, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: UserData;
  images: string[];
  maxAdults: number;
}

export type OffersDetailed = Map<string, OfferDetailed>;
