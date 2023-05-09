/*
  * Extract parameters
  * 提取参数
  * @since 0.0.4
  * @param {String, String}.
  * @returns {String or null}.
  * @example
  * way 1
  * window.location = "www.example.com/page?name=jason"
  * getQueryStr("name")
  * => jason
  * way 2
  * getQueryStr("name", "name=jason")
  * => jason
*/
const getQueryStr = (paramName: string, strParams: string = window.location.search.substring(1)) => {
  const reg = new RegExp(`(^|&)${paramName}=([^&]*)(&|$)`, "i");
  const matchResult = strParams.match(reg);
  return matchResult ? decodeURI(matchResult[2]) : null;
}

export default getQueryStr;