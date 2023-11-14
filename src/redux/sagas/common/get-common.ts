import { ActionType } from 'deox';
import { call, put } from 'redux-saga/effects';
import { getCommonAction } from '@/redux/actions';
import { getListCommonApi } from '@/services/api';
import {EResponseCode} from "@/common/enums";
// FUNCTION

export function* commonSaga(action: ActionType<typeof getCommonAction.request>): Generator {
  const { materials, successCallback, failedCallback } = action?.payload;
  try {
    const response = yield call(getListCommonApi,{});
    const commonResponse: any = response as any;
    if(commonResponse.code === EResponseCode.OK){
      yield put(getCommonAction.success(commonResponse?.data));
    }
    successCallback?.(commonResponse);
  } catch (err) {
    yield put(getCommonAction.failure(err));
    failedCallback?.(err);
  }
}
