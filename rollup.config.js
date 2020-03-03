import replace from '@rollup/plugin-replace';
import autoExternal from 'rollup-plugin-auto-external';
import path from 'path';

import * as plugins from './rollup/plugins';
import { getGlobalName, getFileName } from './rollup/utils';

const { LERNA_PACKAGE_NAME } = process.env;
const PACKAGE_ROOT_PATH = process.cwd();
const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, 'src/index.js');

const globals = {
	validarium: 'Validarium',
	'@validarium/core': 'ValidariumCore',
	'@validarium/intl': 'ValidariumIntl',
	'@validarium/validations': 'ValidariumValidations',
	'@validarium/predicates': 'ValidariumPredicates',
	invariant: 'invariant',
	ramda: 'R',
	'ramda-extension': 'R_',
};

const globalName = getGlobalName(LERNA_PACKAGE_NAME);
const fileName = getFileName(LERNA_PACKAGE_NAME);

export default [
	// CJS
	{
		input: INPUT_FILE,
		output: {
			file: path.join(PACKAGE_ROOT_PATH, 'lib', `${fileName}.js`),
			format: 'cjs',
			indent: false,
		},
		plugins: [autoExternal(), plugins.nodeResolve, plugins.babel, plugins.cjs],
	},

	// ES
	{
		input: INPUT_FILE,
		output: {
			file: path.join(PACKAGE_ROOT_PATH, 'es', `${fileName}.js`),
			format: 'es',
			indent: false,
		},
		plugins: [autoExternal(), plugins.nodeResolve, plugins.babel, plugins.cjs],
	},

	// UMD Development
	{
		input: INPUT_FILE,
		output: {
			file: path.join(PACKAGE_ROOT_PATH, 'dist', `${fileName}.js`),
			format: 'umd',
			name: globalName,
			indent: false,
			globals,
		},
		plugins: [
			// Bundle all in one file for umd distribution for `validarium` package
			...(globalName === 'Validarium' ? [] : [autoExternal()]),
			replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
			plugins.nodeResolve,
			plugins.babel,
			plugins.cjs,
		],
	},

	// UMD Production
	{
		input: INPUT_FILE,
		output: {
			file: path.join(PACKAGE_ROOT_PATH, 'dist', `${fileName}.min.js`),
			format: 'umd',
			name: globalName,
			indent: false,
			globals,
		},
		plugins: [
			// Bundle all in one file for umd distribution for `validarium` package
			...(globalName === 'Validarium' ? [] : [autoExternal()]),
			replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
			plugins.nodeResolve,
			plugins.babel,
			plugins.cjs,
			plugins.terser,
		],
	},
];
