import { AxiosRequestConfig } from 'axios';

namespace ReqResponse {

  export interface Result<T = any> {
    code: number;
    msg: string;
    data: T;
  }

  export interface Data {
    error_code: string;
    error_description: string;
  }
}

declare module 'axios' {
  export interface AxiosInstance {
    request<T = any, R = ReqResponse.Result<T>>(config: AxiosRequestConfig): Promise<R>;
    get<T = any, R = ReqResponse.Result<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    delete<T = any, R = ReqResponse.Result<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    head<T = any, R = ReqResponse.Result<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    options<T = any, R = ReqResponse.Result<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    post<T = any, R = ReqResponse.Result<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
    put<T = any, R = ReqResponse.Result<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
    patch<T = any, R = ReqResponse.Result<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
  }
}

type TableRow = {
  ceil: string;
  columnIndex: number;
  row: [string];
  rowIndex: number;
};
type EchartsParams = {
  dataIndex: number,
  name: string,
  value: number,
  axisValue: string,
  color: string,
  seriesName: string,
}



