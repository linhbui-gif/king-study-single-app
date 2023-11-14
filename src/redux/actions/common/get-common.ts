import { createActionCreator } from 'deox';

// CONSTANTS

export const EGetCommonAction = {
  GET_COMMON: 'GET_COMMON',
  GET_COMMON_REQUEST: 'GET_COMMON_REQUEST',
  GET_COMMON_SUCCESS: 'GET_COMMON_SUCCESS',
  GET_COMMON_FAILED: 'GET_COMMON_FAILED',
};

// FUNCTION

export const getCommonAction = {
  request: createActionCreator(
    EGetCommonAction.GET_COMMON_REQUEST,
    (resolve) => (materials, successCallback, failedCallback) =>
      resolve({ materials, successCallback, failedCallback }),
  ),
  success: createActionCreator(EGetCommonAction.GET_COMMON_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EGetCommonAction.GET_COMMON_FAILED, (resolve) => (error) => resolve({ error })),
};
