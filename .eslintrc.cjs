/* eslint-env node */
module.exports = {
	root: true,
	env: {
		browser: true,
		es2022: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-essential'
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	ignorePatterns: ['docs', 'dist', 'node_modules'],
	rules: {
		indent: [2, 'tab'],
		'no-tabs': 0,
		semi: [1, 'always'],
		'vue/multi-word-component-names': 'off'
	}
};
