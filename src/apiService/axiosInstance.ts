import axios, { AxiosInstance } from 'axios';
import production from './enviroments/production';

interface ApiInstances {
  [key: string]: AxiosInstance;
}

const api: ApiInstances = {};

const createAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return instance;
};
for (const service in production.API) {
  api[service] = createAxiosInstance(production.API[service]);
}

export { api };
