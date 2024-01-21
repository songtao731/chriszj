import axios, {
  AxiosRequestConfig,
  Canceler,
  Axios,
  AxiosInterceptorManager,
  AxiosResponse,
} from "axios";

interface Config extends AxiosRequestConfig {
  cancel?: Canceler;
}

interface AxiosInterceptorManagerNew<V, T = any> {
  use(
    onFulfilled?: (value: V) => T | Promise<T>,
    onRejected?: (error: any) => any
  ): number;
  eject(id: number): void;
}

export type AxiosPromiseNew<T = any> = Promise<T>;

interface AxiosInstanceNew extends Axios {
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManagerNew<AxiosResponse>;
  };
  (config: AxiosRequestConfig): AxiosPromiseNew;
  (url: string, config?: AxiosRequestConfig): AxiosPromiseNew;
}

// 基础配置
const requestConfig: Config = {
  baseURL: "/api",
  timeout: 600000,
  headers: {
    Authorization: `${sessionStorage.getItem("token")}`,
  },
};

const request: AxiosInstanceNew = axios.create(requestConfig);

// 移除重复请求
const pending: Array<Config> = [];
const CancelToken = axios.CancelToken;
const removePending = (config: Config) => {
  for (const key in pending) {
    const item: number = +key;
    const list: Config = pending[key];
    // 当前请求在数组中存在时执行函数体
    if (
      list.url === config.url &&
      list.method === config.method &&
      JSON.stringify(list.params) === JSON.stringify(config.params) &&
      JSON.stringify(list.data) === JSON.stringify(config.data)
    ) {
      // 执行取消操作
      list.cancel && list?.cancel("操作太频繁，请稍后再试");
      // 从数组中移除记录
      pending.splice(item, 1);
    }
  }
};

// 请求拦截器
request.interceptors.request.use(
  (req: any) => {
    req.headers.token = sessionStorage.token;
    // removePending(req);
    req.cancelToken = new CancelToken((c) => {
      pending.push({
        url: req.url,
        method: req.method,
        params: req.params,
        data: req.data,
        cancel: c,
      });
    });
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 返回拦截器
request.interceptors.response.use(
  (response) => {
    const data = response.data;
    if (data) {
      if (!data.code) {
        return response;
      }
      if (data.code) {
        return data;
      } else {
        //  return Promise.reject(data.msg);
      }
    } else {
      // return Promise.reject("接口请求错误");
    }
  },
  (error) => {
    console.error("error:", "-------", error);
    return Promise.reject("服务器异常");
    // window.location.reload()
  }
);

export default request;
