import {DataProcess} from '../../types/state.ts';
import {CityObject, SortingOrder, StoreNameSpace} from '../../const.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchOffersAction, toggleOfferFavoriteStatus} from '../api-actions.ts';
import {City} from '../../types/city.ts';
import {OfferShort, OffersShort} from '../../types/offers/offer-short.ts';
import {Nullable} from '../../types/nullable.ts';

const initialState: DataProcess = {
  activeCity: CityObject.Paris,
  offers: [],
  hoverCardId: null,
  sortingOrder: SortingOrder.popular,
};

export const dataProcess = createSlice(
  {
    name: StoreNameSpace.Data,
    initialState,
    reducers: {
      setActiveCity: (state, action: PayloadAction<City>) => {
        state.activeCity = action.payload;
      },
      setHoverCardId: (state, action: PayloadAction<Nullable<OfferShort['id']>>) => {
        state.hoverCardId = action.payload;
      },
      setSortingOrder: (state, action: PayloadAction<SortingOrder>) => {
        state.sortingOrder = action.payload;
      },
      setOffers: (state, action: PayloadAction<OffersShort>) => {
        state.offers = action.payload;
      },
    },
    extraReducers(builder) {
      builder
        .addCase(fetchOffersAction.fulfilled, (state, action) => {
          state.offers = action.payload;
        })
        .addCase(toggleOfferFavoriteStatus.fulfilled, (state, action) => {
          const offerIndex = state.offers.findIndex((offer) => offer.id === action.payload.id);
          if (offerIndex > -1) {
            state.offers[offerIndex].isFavorite = action.payload.isFavorite;
          }
        });
    }
  }
);

export const {setActiveCity, setHoverCardId, setSortingOrder, setOffers} = dataProcess.actions;
