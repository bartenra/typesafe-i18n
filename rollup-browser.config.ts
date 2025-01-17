import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

const wrap = (type) => (type ? `.${type}` : '')

const getPlugins = (minify) => [resolve(), typescript({ sourceMap: !minify }), minify && terser()]

const iifeConfig = (type, minify = false) => ({
	input: `./src/browser${wrap(type)}.ts`,
	output: [
		{
			file: `dist/i18n${wrap(type)}${minify ? '.min' : ''}.js`,
			format: 'iife',
			sourcemap: !minify,
		},
	],
	plugins: getPlugins(minify),
})

const getIifeConfigs = (type) => [iifeConfig(type), iifeConfig(type, true)]

export default [
	...getIifeConfigs(''),
	...getIifeConfigs('string'),
	...getIifeConfigs('object'),
	...getIifeConfigs('all'),
	// ...getIifeConfigs('loader'),
	// ...getIifeConfigs('loader.async'),
]
