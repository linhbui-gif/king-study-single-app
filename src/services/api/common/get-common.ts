import ApiService from '@/services/api';

export type TCommonResponse = unknown;

export const getListCommonApi = async (data:any): Promise<TCommonResponse> => {
  const response = await ApiService.get(`/common`, {
    params: data
  });
  return response.data;
};
