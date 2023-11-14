import { combineReducers } from 'redux';

import { loadingReducer, errorReducer, successReducer } from './status';
import uiReducer from './ui';
import CommonReducer from './common';

const rootReducer = combineReducers({
  loadingReducer,
  errorReducer,
  successReducer,
  uiReducer,
  CommonReducer
});

export default rootReducer;

export type TRootState = ReturnType<typeof rootReducer>;
