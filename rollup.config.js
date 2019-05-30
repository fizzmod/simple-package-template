import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json'
import pkg from './package.json';

export default [
	// browser-friendly UMD build
	{
		input: 'src/index.js',
		output: {
			name: 'main',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			json(),
			resolve(), // so Rollup can find `ms`
			babel({
				babelrc: false,
				runtimeHelpers: true,
				exclude: ['node_modules/**'],
				presets: ['@babel/preset-env'],
				plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime']
			}),
			commonjs()// so Rollup can convert `ms` to an ES module
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// the `targets` option which can specify `dest` and `format`)
	{
		input: 'src/index.js',
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		],
		plugins: [
			babel({
				babelrc: false,
				runtimeHelpers: true,
				exclude: ['node_modules/**'],
				presets: ['@babel/preset-env'],
				plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime']
			})
		]
	}
];