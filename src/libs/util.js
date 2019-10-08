// 这里封装一些需要常用到的方法
import axios from 'axios'

const Util = {
  baseUrl: '123' //到时后台给的url
};
//到时请求网络数据时就在需要的地方引用这util.js模块，使用ajax实例
Util.ajax = axios.create({
  baseURL: Util.baseUrl
});

Util.ajax.interceptors.response.use(res => {
  return res.data;
});