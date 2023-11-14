import { all, fork } from 'redux-saga/effects';
import commonSaga from './common';

const rootSaga = function* root(): Generator {
  yield all([
    fork(commonSaga),
  ]);
};

export default rootSaga;
