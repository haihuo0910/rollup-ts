const path = require('path');
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
// import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { uglify } from "rollup-plugin-uglify";
import { terser } from "rollup-plugin-terser";
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

import { name } from '../package.json'
const file = type => `dist/${name}.${type}.js`
console.log(__dirname);

export default {
  input: 'src/index.ts',
  output: [
    { name: 'rolluplearn', file: file('umd'), format: 'umd' },
    { file: file('esm'), format: 'esm' },
    { file: file('cjs'), format: 'cjs' }
  ],
  external: ["lodash"],// 保持外部引用状态
}