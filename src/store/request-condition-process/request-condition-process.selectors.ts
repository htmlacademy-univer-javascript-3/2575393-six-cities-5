import {RootState} from '../../types/state.ts';
import {StoreNameSpace} from '../../const.ts';
import {RequestStatus} from '../../types/request-status.ts';

export const getRequestStatus = (state: RootState): RequestStatus => state[StoreNameSpace.RequestCondition].requestStatus;
