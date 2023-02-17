import exactType from "./func/exactType.mjs";
import isEmpty from "./func/isEmpty.mjs";
import getQueryStr from "./func/getQueryStr.mjs";
import getDate from "./func/getDate.mjs";
import getTimestamp from "./func/getTimestamp.mjs";
import browserEnv from "./func/browserEnv.mjs";

const wi = {
  name: "witis",
  // Determine the data type
  // 判断数据类型
  exactType: exactType,
  // Determine if it is empty
  // 判断是否为空
  isEmpty: isEmpty,
  // Extract parameters
  // 提取参数
  getQueryStr: getQueryStr,
  // Get date
  // 获取时间
  getDate: getDate,
  // Get timestamp
  // 获取时间戳
  getTimestamp: getTimestamp,
  // Determine the browser environment(Experimental function, use with caution)
  // 判断浏览器环境(实验功能，慎用)
  browserEnv: browserEnv,
};

export default wi;
