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
    let age: string = "";
    if(num >= 1) {
      age = num.toString();
      return parseInt(age) + "岁";
    } else if(num > 0 && num < 1) {
      age = (num*10).toString();
      return parseInt(age) + "个月";
    } else if(num <= 0) {
      return new TypeError("Age cannot be zero and negative");
    } else {
      return new SyntaxError("Unexpected number");
    }
}

export default getZnAge;