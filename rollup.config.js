import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
import { terser } from 'rollup-plugin-terser'

// TODO: Copy webextension-polyfill over to a vendor directory and point
// manifest.json to it. This way, easing unit testing
const copyOptions = {
  targets: [
    { src: './src/logo', dest: './dist' },
    { src: './src/manifest.json', dest: './dist/' },
    { src: './src/modal/*.css', dest: './dist/modal' },
    { src: './src/modal/*.html', dest: './dist/modal' },
  ]
}

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
  plugins: [
    resolve(),
    commonjs(),
    terser(),
    copy(copyOptions)
  ]
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
  plugins: [
    resolve(),
    commonjs(),
    terser(),
    copy(copyOptions)
  ]
}]
