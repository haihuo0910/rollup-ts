import { name } from '../package.json'
const file = type => `dist/${name}.${type}.js`
console.log(__dirname);

export default {
  input: 'src/index.ts',
  output: [
    { name: 'rolluplearn', file: file('umd'), format: 'umd', sourcemap: true },
    { file: file('esm'), format: 'esm', sourcemap: true },
    { file: file('cjs'), format: 'cjs', sourcemap: true }
  ],
  external: ["lodash"],// 保持外部引用状态
}