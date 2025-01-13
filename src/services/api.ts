import axios, {AxiosError, AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import {getToken} from './token.ts';
import {toast} from 'react-toastify';
import {DetailMessageType, SERVER_MINIMAL_ERROR_CODE, shouldDisplayError} from './error-handle.ts';

const BACKEND_URL = 'https://14.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );


  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {

        if (error.response.status >= SERVER_MINIMAL_ERROR_CODE) {

          toast.error('Ой-ой! Ошибка соединения с сервером. Сервер не доступен!');

        } else if (error.response.data.details.length) {
          error.response.data.details.map((property) => {
            property.messages.map((message) => {

              toast.warning(message);

            });
          });
        } else if (error.response.data.message) {

          const detailMessage = (error.response.data);
          toast.warn(detailMessage.message);
        }
      }

      throw error;
    }
  );

  return api;
};
