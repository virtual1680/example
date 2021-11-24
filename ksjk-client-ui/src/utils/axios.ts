import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';


const instance: AxiosInstance = axios.create({
	baseURL: '/api/',
	timeout: 15000, // 请求超时时间
});

// 错误处理
const error = (error: AxiosError) => {
	if (error.message.includes('timeout')) {
		ElMessage.error('请求超时，请刷新网页重试');
	}
	if (error.response) {
		const data = error.response.data;
		if (error.response.status === 403) {
			ElMessage.error('拒绝访问');
		}
		if (error.response.status === 401) {
			ElMessage.error('未登录');
		}
	}
	return Promise.reject(error);
};

type Config = AxiosRequestConfig & { successNotice?: boolean; errorNotice?: boolean };

instance.interceptors.request.use((config: Config) => {
	console.log('request---', config);
	config.headers['Access-Token'] = localStorage.getItem('token') || '';
	return config;
}, error);

instance.interceptors.response.use((response: AxiosResponse) => {
	console.log('response---', response);
	const config: Config = response.config;

	const code = Number(response.status);
	if (code === 200) {
		if (config && config.successNotice) {
			ElMessage.success(response.data.msg);
		}
		return response.data;
	} else {
		const errCode = [402, 403, 500];
		if (errCode.includes(code)) {
			ElMessage.error(response.data.msg);
		}
	}
	return response.data;
}, error);

export default instance;
