import typeScript from '@rollup/plugin-typescript';
import terser from "@rollup/plugin-terser";

export default {
  input: "./index.ts", //入口文件
  output: [{
    // dir: "dist", //打包后的存放文件
    format: "cjs", //输出格式 amd es6 iife umd cjs
    name: "bundleName", //如果iife, umd需要指定一个全局变量
    file: 'dist/witis.js' //自定义打包存储文件
  },{
    // dir: "dist", //打包后的存放文件
    format: "es", //输出格式 amd es6 iife umd cjs
    name: "bundleName", //如果iife, umd需要指定一个全局变量
    file: 'dist/witis.ts' //自定义打包存储文件
  }],
  plugins: [
    typeScript(),
    terser(), // 压缩代码工具
  ],
};
