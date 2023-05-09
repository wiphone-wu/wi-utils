import isEmpty from "./isEmpty"

/*
  * Get date
  * 获取时间
  * @since 0.0.4
  * @param {String or Number}.
  * @returns {String}.
  * @example
  * method 1
  * getDate(1654732800000)
  * => "2022-06-09"
  * method 2
  * getDate()
  * => 2022-06-09 17:21:47
*/
const getDate = (element?: any) => {
  const date = isEmpty(element) ? new Date() : new Date(element);
  const y = date.getFullYear(),
    m = date.getMonth() + 1,
    d = date.getDate();
  return `${y}-${m.toString().padStart(2, '0')}-${d.toString().padStart(2, '0')} ${date.toTimeString().substring(0, 8)}`;
};

export default getDate;