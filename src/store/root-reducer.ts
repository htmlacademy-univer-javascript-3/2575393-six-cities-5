import {combineReducers} from '@reduxjs/toolkit';
import {StoreNameSpace} from '../const.ts';
import {requestConditionProcess} from './request-condition-process/request-condition-process.slice.ts';
import {dataProcess} from './data-process/data-process.slice.ts';
import {userProcess} from './user-process/user-process.slice.ts';
import {detailedDataProcess} from './detailed-data-process/detailed-data-process.slice.ts';
import {favoriteDataProcess} from './favorite-data-process/favorite-data-process.slice.ts';

export const rootReducer = combineReducers({
  [StoreNameSpace.Data]: dataProcess.reducer,
  [StoreNameSpace.User]: userProcess.reducer,
  [StoreNameSpace.DetailedData]: detailedDataProcess.reducer,
  [StoreNameSpace.RequestCondition]: requestConditionProcess.reducer,
  [StoreNameSpace.FavoriteData]: favoriteDataProcess.reducer,
});
