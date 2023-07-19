import { HttpClient, httpClient } from "../http/http-client";

import { IIpInfo } from "./types/ip-info.interface";

class IpInfoService {
  constructor(private httpClient: HttpClient) {}

  async getInfoByCurrentIp(): Promise<IIpInfo> {
    const response = await this.httpClient.get<IIpInfo>(`/api/ip-info`);
    return response;
  }
}

export const ipInfoService = new IpInfoService(httpClient);