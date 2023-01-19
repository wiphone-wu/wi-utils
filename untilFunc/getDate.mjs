import isEmpty from './isEmpty.mjs'

/*
  * Get date
  * 获取时间
  * @since 0.0.4
  * @param {String or Number}.
  * @returns {String}.
  * @example
  * method 1
  * getDate(1654732800000)
  * => '2022-06-09'
  * method 2
  * getDate()
  * => 2022-06-09 17:21:47
*/
const getDate = (element) => {
  let date = new Date();
  if(!isEmpty(element)) {
    date = new Date(element);
  }
  let y = date.getFullYear(),
  m = date.getMonth() + 1,
  d = date.getDate();
  return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + date.toTimeString().substring(0, 8);
}

export default getDate;