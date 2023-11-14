import { createReducer } from 'deox';

import { TCommonResponse } from '@/services/api/common';
import {getCommonAction} from '@/redux/actions';
import {getCommonState} from "./get-common";

export type TCommonState = {
  getCommonResponse?: TCommonResponse;
};

const initialState: TCommonState = {
  getCommonResponse: undefined,
};

const CommonReducer = createReducer(initialState, (handleAction) => [
  handleAction(getCommonAction.success, getCommonState),
]);

export default CommonReducer;
