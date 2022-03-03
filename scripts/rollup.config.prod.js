import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";
import clear from 'rollup-plugin-clear';
import baseConfig from './rollup.config';

export default [
  {
    ...baseConfig,
    plugins: [
      clear({ targets: ['dist'] }),
      nodeResolve(),//包含lodash/
      commonjs(),// 支持CommonJS
      typescript(),
      // uglify(),
    ],
    external: ["lodash"],// 保持外部引用状态
  },
  {
    input: "src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
]