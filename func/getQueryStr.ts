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
const getQueryStr = (paramName: string, strParams: string) => {
  let reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)", "i");
  let r = strParams?strParams.match(reg):window.location.search.substring(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}

export default getQueryStr;