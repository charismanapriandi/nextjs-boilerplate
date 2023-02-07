import { BASE_HTTP_URL } from 'domain/_app.constants';
import { Axios, AxiosRequestConfig } from 'axios';

export class HttpTransmission {
  private axios = new Axios({
    baseURL: BASE_HTTP_URL,
  })

  get<T>(url: string, config?: AxiosRequestConfig<T>) {
    return this.axios.get<T>(url, config);
  }

  post<T>(url: string, body: unknown, config?: AxiosRequestConfig<T>) {
    return this.axios.post<T>(url, body, config);
  }

  patch<T>(url: string, body: unknown, config?: AxiosRequestConfig<T>) {
    return this.axios.patch<T>(url, body, config);
  }

  delete<T>(url: string, config?: AxiosRequestConfig<T>) {
    return this.axios.patch<T>(url, config);
  }
}