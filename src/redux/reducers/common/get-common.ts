export const getCommonState = (state:any, action:any) => ({
  ...state,
  getCommonResponse: action.payload.response,
});
