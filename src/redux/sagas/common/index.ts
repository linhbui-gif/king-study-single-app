import { all, takeLatest } from 'redux-saga/effects';
import { getCommonAction } from '@/redux/actions';
import { commonSaga } from './get-common';

export default function* root(): Generator {
  yield all([
    takeLatest(getCommonAction.request.type, commonSaga),
  ]);
}
