# wi-utils
Common js functions organized by wiphone.
这是由我(wi)整理的常用的js函数方法。

# install 安装
npm install wi-utils

# use 使用
## use in vue
## 在vue中使用
### import in entry file
### 在入口文件导入
import wi from 'wi-utils';
Vue.prototype.$wi = wi;
### use in page
### 在页面中使用
this.$wi.funs();

## or
## 或者

## use in js
## 在js中使用
### import and use in the page
### 在页面中导入并使用
import wi from 'wi-utils';
wi.funs();