import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { uglify } from "rollup-plugin-uglify";
import dts from "rollup-plugin-dts";
import baseConfig from './rollup.config';

export default [
  {
    ...baseConfig,
    plugins: [
      nodeResolve(),//包含lodash/
      commonjs(),// 支持CommonJS
      typescript(),
      // uglify()
    ],
    external: ["lodash"],// 保持外部引用状态
  },
  {
    input: "src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
]