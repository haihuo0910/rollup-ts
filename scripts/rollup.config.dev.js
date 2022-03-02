import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

import baseConfig from './rollup.config';

export default {
  ...baseConfig,
  // 监听src下文件变化
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**'
  },
  plugins: [
    nodeResolve(),//包含lodash/
    commonjs(),// 支持CommonJS
    typescript(),
    serve({
      open: false,
      openPage: '/test/index.html'
    }),
    livereload()
  ],
  external: ["lodash"],// 保持外部引用状态
}