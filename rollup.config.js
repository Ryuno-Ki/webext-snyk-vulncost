import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
import { terser } from 'rollup-plugin-terser'

const copyOptions = {
  targets: [
    { src: './src/logo', dest: './dist' },
    { src: './src/modal', dest: './dist' },
    { src: './src/manifest.json', dest: './dist/' }
  ]
}

export default [{
  input: './src/background/index.js',
  output: [{
    file: './dist/background.js',
    format: 'iife',
    name: 'vulncost'
  }, {
    file: './dist/background.umd.js',
    format: 'umd',
    name: 'vulncost'
  }, {
    file: './dist/background.es6.js',
    format: 'es'
  }],
  plugins: [
    resolve(),
    commonjs(),
    terser(),
    copy(copyOptions)
  ]
}]
