import {DetailedDataProcess} from '../../types/state.ts';
import {createSlice} from '@reduxjs/toolkit';
import {StoreNameSpace} from '../../const.ts';
import {
  fetchNearPlacesAction,
  fetchOfferAction,
  fetchReviewsAction,
  postReviewAction, toggleOfferFavoriteStatus
} from '../api-actions.ts';

const initialState: DetailedDataProcess = {
  offerDetailed: null,
  nearPlaces: [],
  reviews: [],
};

export const detailedDataProcess = createSlice(
  {
    name: StoreNameSpace.DetailedData,
    initialState,
    reducers: {
      dropAllDetailedData: (state) => {
        state.offerDetailed = null;
        state.reviews = [];
        state.nearPlaces = [];
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchOfferAction.fulfilled, (state, action) => {
          state.offerDetailed = action.payload;
        })
        .addCase(fetchNearPlacesAction.fulfilled, (state, action) => {
          state.nearPlaces = action.payload;
        })
        .addCase(fetchReviewsAction.fulfilled, (state, action) => {
          state.reviews = action.payload;
        })
        .addCase(postReviewAction.fulfilled, (state, action) => {
          state.reviews = state.reviews.concat([action.payload]);
        })
        .addCase(toggleOfferFavoriteStatus.fulfilled, (state, action) => {
          const newOffer = action.payload;
          if (state.offerDetailed?.id === newOffer.id) {
            state.offerDetailed.isFavorite = newOffer.isFavorite;
          }

          const nearOffersIndex = state.nearPlaces.findIndex((offer) => offer.id === newOffer.id);
          if (nearOffersIndex > -1) {
            state.nearPlaces[nearOffersIndex].isFavorite = newOffer.isFavorite;
          }
        });
    }
  }
);

export const {dropAllDetailedData} = detailedDataProcess.actions;
