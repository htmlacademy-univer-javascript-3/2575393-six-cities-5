import {RootState} from '../../types/state.ts';
import {AuthStatus, StoreNameSpace} from '../../const.ts';
import {UserData} from '../../types/user-data.ts';
import {Nullable} from '../../types/nullable.ts';

export const getUserData = (state: RootState): Nullable<UserData> => state[StoreNameSpace.User].userData;
export const getAuthStatus = (state: RootState): AuthStatus => state[StoreNameSpace.User].authorizationStatus;
