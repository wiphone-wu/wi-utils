import isEmpty from "./isEmpty"

/*
  * Get timestamp
  * 获取时间戳
  * @since 0.0.4
  * @param {String}.
  * @returns {Number}.
  * @example
  * method 1
  * getTimestamp("2022-06-09")
  * => 1654732800000
  * method 2
  * getTimestamp()
  * => 1654761791150
*/
const getTimestamp = (element?: any) => {
  let timestamp = new Date().getTime();
  if(!isEmpty(element)) {
    timestamp = new Date(element).getTime();
  }
  return timestamp;
}

export default getTimestamp;