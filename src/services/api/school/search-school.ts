import ApiService from '@/services/api';

export type TSchoolResponse = unknown;

export const getListSearchSchoolApi = async (data:any): Promise<TSchoolResponse> => {
  const response = await ApiService.get(`/common/search-school`, {
    params: data
  });
  return response.data;
};
