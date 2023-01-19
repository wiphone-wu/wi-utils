const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',    // 打包模式，生产模式会压缩
  entry: {
      index: './index.mjs'  // 入口文件
  },
  output: {
    path: path.resolve(__dirname,'dist'),  // 输出目录
    filename: '[name].js',  // 输入文件名
    library: {
      name: 'wiUtils',  // 库名
      type: 'umd', // 允许导出的库可以在CommonJS/AMD的规范下使用，也可以作为全局变量使用
    },
    globalObject: 'this',  // type为'umd'时，此选项将决定使用哪个全局对象来挂载 library
  },
  plugins: [
    new CleanWebpackPlugin()  // 打包会删除旧包插件
  ]
}