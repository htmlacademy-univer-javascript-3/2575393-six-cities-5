import {createAsyncThunk} from '@reduxjs/toolkit';
import {OfferShort, OffersShort} from '../types/offers/offer-short.ts';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute, StoreNameSpace} from '../const.ts';
import {redirectToRoute} from './acion.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {UserData} from '../types/user-data.ts';
import {AuthData} from '../types/auth-data.ts';
import {OfferDetailed} from '../types/offers/offer-detailed.ts';
import {Review, ReviewData, Reviews} from '../types/review.ts';
import {Nullable} from '../types/nullable.ts';
import {AppDispatch, RootState} from '../types/state.ts';

type ExtraData = {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
};

export const fetchFavoritesAction = createAsyncThunk<OffersShort, undefined, ExtraData>(
  `${StoreNameSpace.FavoriteData}/fetchFavorites`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OffersShort>(APIRoute.Favorite);

    return data;
  },
);

export const toggleOfferFavoriteStatus = createAsyncThunk<OfferDetailed | OfferShort, OfferShort | OfferDetailed, ExtraData>(
  `${StoreNameSpace.FavoriteData}/toggleOfferFavoriteStatus`,
  async (offer, {extra: api}) => {
    const newStatus = offer.isFavorite ? 0 : 1;
    const {data} = await api.post<OfferDetailed | OfferShort>(`${APIRoute.Favorite}/${offer.id}/${newStatus}`);

    return data;
  },
);

export const fetchOffersAction = createAsyncThunk<OffersShort, undefined, ExtraData>(
  `${StoreNameSpace.Data}/fetchOffers`,
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OffersShort>(APIRoute.Offers);

    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<Nullable<OfferDetailed>, OfferDetailed['id'], ExtraData>(
  `${StoreNameSpace.DetailedData}/fetchOffer`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferDetailed>(`${APIRoute.Offers}/${offerId}`);

    return data;
  },
);

export const fetchNearPlacesAction = createAsyncThunk<OffersShort, OfferShort['id'], ExtraData>(
  `${StoreNameSpace.DetailedData}/fetchNearPlaces`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OffersShort>(`${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`);

    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<Reviews, OfferShort['id'], ExtraData>(
  `${StoreNameSpace.DetailedData}/fetchReviews`,
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Comments}/${offerId}`);

    return data;
  },
);

export const postReviewAction = createAsyncThunk<Review, {reviewData: ReviewData; offerId: OfferShort['id']}, ExtraData>(
  `${StoreNameSpace.DetailedData}/postReview`,
  async ({reviewData, offerId}, {extra: api}) => {
    const {data} = await api.post<Review>(`${APIRoute.Comments}/${offerId}`, reviewData);

    return data;
  },
);

export const fetchUserData = createAsyncThunk<Nullable<UserData>, undefined, ExtraData>(
  `${StoreNameSpace.User}/fetchUserData`,
  async (_arg, {extra: api, dispatch}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    dispatch(fetchFavoritesAction());

    return data;
  },
);

export const loginAction = createAsyncThunk<Nullable<UserData>, AuthData, ExtraData>(
  `${StoreNameSpace.User}/login`,
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    dispatch(fetchFavoritesAction());

    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, ExtraData>(
  `${StoreNameSpace.User}/logout`,
  async (_arg, {extra: api, dispatch}) => {
    await api.delete(APIRoute.Logout);
    dropToken();

    dispatch(fetchOffersAction());
  },
);
