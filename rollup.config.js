import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default [{
  input: 'background/index.js',
  output: [{
    file: 'dist/background.js',
    format: 'iife',
    name: 'vulncost'
  }, {
    file: 'dist/background.umd.js',
    format: 'umd',
    name: 'vulncost'
  }, {
    file: 'dist/background.es6.js',
    format: 'es'
  }],
  plugins: [
    resolve(),
    commonjs(),
    terser()
  ]
}]
