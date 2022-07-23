import axios from 'axios';

import { coEnderecoApi } from '../Constantes';

export function getAPIClient(ctx?: any) {
  const api = axios.create({
    baseURL: coEnderecoApi,
  });

  return api;
}
