import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command }) => ({
	plugins: [vue()],
	base: command === 'build' ? '/vue/' : '/',
	build: {
		outDir: 'docs',
		emptyOutDir: true
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	}
}));
