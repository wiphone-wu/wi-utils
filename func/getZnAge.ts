/*
  * Get zn age
  * 获取时间
  * @since 0.0.7
  * @param {Number}.
  * @returns {String}.
  * @example
  * method 1
  * getDate(2)
  * => "2岁"
  * method 2
  * getDate(0.5)
  * => "5个月"
*/
const getZnAge = (num: number) => {
  if(num <= 0) {
  throw new TypeError("Age cannot be zero and negative");
  } else if(num >= 1) {
  return ${Math.floor(num)}岁;
  } else {
  return ${Math.floor(num * 10)}个月;
  }
  }

export default getZnAge;