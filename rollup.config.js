import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
import { terser } from 'rollup-plugin-terser'

const copyOptions = {
  targets: [
    {
      src: './node_modules/webextension-polyfill/dist/browser-polyfill.min.js',
      dest: './dist/modal/vendor'
    },
    {
      src: './node_modules/webextension-polyfill/dist/browser-polyfill.min.js.map',
      dest: './dist/modal/vendor'
    },
    { src: './src/logo', dest: './dist' },
    { src: './src/manifest.json', dest: './dist/' },
    { src: './src/modal/*.css', dest: './dist/modal' },
    { src: './src/modal/*.html', dest: './dist/modal' },
  ]
}

const plugins = [
  resolve(),
  commonjs(),
  terser(),
  copy(copyOptions)
]

export default [{
  input: './src/background/index.js',
  output: [{
    file: './dist/background.js',
    format: 'iife',
    name: 'vulncost_background'
  }, {
    file: './dist/background.umd.js',
    format: 'umd',
    name: 'vulncost_background'
  }, {
    file: './dist/background.es6.js',
    format: 'es'
  }],
  plugins
}, {
  input: './src/modal/index.js',
  output: [{
    file: './dist/modal/modal.js',
    format: 'iife',
    name: 'vulncost_modal'
  }, {
    file: './dist/modal/modal.umd.js',
    format: 'umd',
    name: 'vulncost_modal'
  }, {
    file: './dist/modal/modal.es6.js',
    format: 'es'
  }],
  plugins
}]
