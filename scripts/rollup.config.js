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