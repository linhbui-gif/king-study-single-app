import AuthorizedInstance from '@/services/authorized-api';
import env from "@/env";

const ApiService = AuthorizedInstance(env.api.baseUrl.service);
export default ApiService;
export * from './common'
export * from './school'
export * from './country'
