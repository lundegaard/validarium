import cjsPlugin from '@rollup/plugin-commonjs';
import { terser as terserPlugin } from 'rollup-plugin-terser';
import nodeResolvePlugin from '@rollup/plugin-node-resolve';
import babelPlugin from 'rollup-plugin-babel';
import path from 'path';

const { LERNA_ROOT_PATH } = process.env;

export const cjs = cjsPlugin({
	include: /node_modules/,
});

export const terser = terserPlugin({
	compress: {
		pure_getters: true,
		unsafe: true,
		unsafe_comps: true,
		warnings: false,
	},
});

export const nodeResolve = nodeResolvePlugin();

export const babel = envName =>
	babelPlugin({
		cwd: LERNA_ROOT_PATH,
		runtimeHelpers: true,
		configFile: path.join(__dirname, './babel.config.js'),
		envName,
	});
