import { all, fork } from 'redux-saga/effects';
import {commonSaga} from "@/redux/sagas/common/get-common";

const rootSaga = function* root(): Generator {
  yield all([
    fork(commonSaga),
  ]);
};

export default rootSaga;
