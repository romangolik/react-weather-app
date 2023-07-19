import axios, { AxiosInstance } from "axios";

import { Params } from "./types/params.type";

class HttpClient {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      responseType: 'json' as const,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10 * 1000
    }); 
  }

  async get<TResponse>(
    url: string, 
    params?: Params,
    DtoClass?: new (responseValue: TResponse) => TResponse
  ): Promise<TResponse> {
    const { data } = await this.client.get<TResponse>(url, { params });
    return DtoClass ? new DtoClass(data) : data;
  }

  async getAll<TResponse>(
    url: string, 
    params?: Params,
    DtoClass?: new (responseValue: TResponse) => TResponse
  ): Promise<TResponse[]> {
    const { data } = await this.client.get<TResponse[]>(url, { params });
    return DtoClass ? data.map(responseItem => new DtoClass(responseItem)) : data;
  }

  async update<TResponse, TRequest = unknown>(
    url: string, 
    body: TRequest,
    DtoClass?: new (responseValue: TResponse) => TResponse
  ): Promise<TResponse> {
    const { data } = await this.client.put<TResponse>(url, body);
    return DtoClass ? new DtoClass(data) : data;
  }

  async partialUpdate<TResponse, TRequest = unknown>(
    url: string, 
    body: TRequest,
    DtoClass?: new (responseValue: TResponse) => TResponse
  ): Promise<TResponse> {
    const { data } = await this.client.patch<TResponse>(url, body);
    return DtoClass ? new DtoClass(data) : data;
  }

  async create<TResponse, TRequest = unknown>(
    url: string, 
    body: TRequest,
    DtoClass?: new (responseValue: TResponse) => TResponse
  ): Promise<TResponse> {
    const { data } = await this.client.post<TResponse>(url, body);
    return DtoClass ? new DtoClass(data) : data;
  }

  async remove<TResponse>(
    url: string, 
    params?: Params
  ): Promise<TResponse> {
    const { data } = await this.client.delete<TResponse>(url, { params });
    return data;
  }
}

export const httpClient = new HttpClient();
export type { HttpClient };