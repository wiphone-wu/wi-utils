import typeScript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from "@rollup/plugin-terser";

export default {
  input: "./index.ts", //入口文件
  output: {
    // dir: "dist", //打包后的存放文件
    format: "cjs", //输出格式 amd es iife umd cjs
    name: "bundleName", //如果iife, umd需要指定一个全局变量
    file: 'dist/witis.cjs.js' //自定义打包存储文件
  },
  plugins: [
    typeScript(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    terser() // 压缩代码工具
  ],
};
