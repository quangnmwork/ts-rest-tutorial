import { initQueryClient } from '@ts-rest/react-query';
import { router } from './router';
import { SERVER_URL } from '../../constants/';

export const clientProvider = initQueryClient(router, {
  baseUrl: SERVER_URL,
  baseHeaders: {},
});
