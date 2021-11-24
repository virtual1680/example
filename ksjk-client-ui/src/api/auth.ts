import { ReqResponse } from "@/shims";
import axios from "@/utils/axios";

/**
 * 登录
 * @param data {username password}
 */
const login = (data: {}) => {
  return axios.request<ReqResponse.Data>({
    url: '/miniAuth/oauth/wechat/token',
    method: "POST",
    data,
    params: data
  });
}



login({ openId: '123456', nickname: "", headimgurl: "" })?.then(res => {
  console.log('我是返回的参数--', res.data.error_code)
});


// function request(url: string, method: Method = 'GET') {
//   console.log('post --evaluated')
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     descriptor.value = (data: {}) => {
//       console.log('我是参数----', data);
//       return axios.request({
//         url, method,
//         data,
//         params: data
//       });
//     }
//   }
// }