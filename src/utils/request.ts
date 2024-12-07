import axios from "axios";
import { message } from "antd";

// 创建 axios 实例
const request = axios.create({
  baseURL: "http://localhost:3000", // 设置请求的基础 URL
  timeout: 10000, // 设置超时时间
  headers: {
    "Content-Type": "application/json", // 设置请求头
  },
});

// 请求拦截器：可以在请求发送前修改请求配置，添加 token 等
request.interceptors.request.use(
  (config) => {
    // 假设这里添加一个认证 token
    const token = localStorage.getItem("auth_token"); // 假设 token 存储在 localStorage 中
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // 在请求头中添加 token
    }
    return config;
  },
  (error) => {
    // 请求错误处理
    message.error(error);
    return Promise.reject(error);
  }
);

// 响应拦截器：统一处理响应错误
request.interceptors.response.use(
  (response: any) => {
    if (response.data.code !== 200) {
      message.error("error");
    }
    // 对响应数据进行处理
    return response.data; // 这里直接返回响应的数据部分
  },
  (error) => {
    console.log(error);
    // 统一错误处理
    // 根据需要做进一步处理，比如显示通知、重定向等
    if (error.response) {
      // 如果服务器有响应，可以在这里根据错误代码做不同的处理
      switch (error.response.status) {
        case 401:
          // 未授权，可能需要重定向到登录页面
          break;
        case 500:
          // 服务器错误
          break;
        default:
          // 其他错误
          break;
      }
    } else {
      // 请求超时或网络错误
      message.error(error.message || "Network Error");
      return Promise.reject(error);
    }
  }
);

export default request;
