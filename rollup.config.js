import { terser } from 'rollup-plugin-terser';

export default {
  input: './index.mjs', //入口文件
  output:{
    file: './dist/index.js',//打包后的存放文件
    format: 'umd', //输出格式 amd es6 iife umd cjs
    name: 'bundleName' //如果iife, umd需要指定一个全局变量
  },
  plugins: [
    terser() // 压缩代码工具
  ]
}