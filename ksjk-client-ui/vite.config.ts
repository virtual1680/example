import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import styleImport from 'vite-plugin-style-import';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
//开启 gzip 可以极大的压缩静态资源，对页面加载的速度起到了显著的作用
// import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({

	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
			'@assets': resolve(__dirname, 'src/assets'),
			'@components': resolve(__dirname, 'src/components'),
		},
	},
	server: {
		fs: {
			strict: false,
		},
		port: 3000,
		proxy: {
			"/api": {
				target: 'http://api.test.travel.lecent.cn/',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '/')
			},
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "./src/assets/scss/utils.scss";',
			},

		}
	},
	plugins: [
		// viteCompression(),
		vue(),
		vueJsx(),
	],
});
