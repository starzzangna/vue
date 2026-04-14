'use strict';

import axios from 'axios';

const config = {
	// baseURL: import.meta.env.VITE_API_BASE_URL || ''
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

_axios.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default function installAxios (app) {
	app.config.globalProperties.axios = _axios;
	app.config.globalProperties.$axios = _axios;
	if (typeof window !== 'undefined') {
		window.axios = _axios;
	}
}
