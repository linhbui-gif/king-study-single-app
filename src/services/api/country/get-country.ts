import ApiService from '@/services/api';

export type TCountryResponse = unknown;

export const getListCountryApi = async (data:any): Promise<TCountryResponse> => {
  const response = await ApiService.get(`/common/get-country`, {
    params: data
  });
  return response.data;
};
export const getListRankingApi = async (data:any): Promise<TCountryResponse> => {
  const response = await ApiService.get(`/common/get-ranking`, {
    params: data
  });
  return response.data;
};
export const getListLevelApi = async (data:any): Promise<TCountryResponse> => {
  const response = await ApiService.get(`/common/get-level`, {
    params: data
  });
  return response.data;
};
export const getListCityApi = async (data:any): Promise<TCountryResponse> => {
  const response = await ApiService.get(`/common/get-city`, {
    params: data
  });
  return response.data;
};
export const getListMajorApi = async (data:any): Promise<TCountryResponse> => {
  const response = await ApiService.get(`/common/get-major`, {
    params: data
  });
  return response.data;
};
