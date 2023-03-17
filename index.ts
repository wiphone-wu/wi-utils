import browserEnv from "./func/browserEnv";
import exactType from "./func/exactType";
import getDate from "./func/getDate";
import getQueryStr from "./func/getQueryStr";
import getTimestamp from "./func/getTimestamp";
import getZnAge from "./func/getZnAge";
import isEmpty from "./func/isEmpty";

const wi = {
  name: "witis",
  // Determine the browser environment(Experimental function, use with caution)
  // 判断浏览器环境(实验功能，慎用)
  browserEnv: browserEnv,
  // Determine the data type
  // 判断数据类型
  exactType: exactType,
    // Get date
  // 获取时间
  getDate: getDate,

  // Extract parameters
  // 提取参数
  getQueryStr: getQueryStr,
  // Get timestamp
  // 获取时间戳
  getTimestamp: getTimestamp,
  // Get zn age
  // 获取中文岁数
  getZnAge: getZnAge,
  // Determine if it is empty
  // 判断是否为空
  isEmpty: isEmpty,
};

export default wi;
