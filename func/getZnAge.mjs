import isEmpty from './isEmpty.mjs'
import exactType from './exactType.mjs'

/*
  * Get zn age
  * 获取时间
  * @since 0.0.7
  * @param {Number}.
  * @returns {String}.
  * @example
  * method 1
  * getDate(2)
  * => '2岁'
  * method 2
  * getDate(0.5)
  * => '5个月'
*/
const getZnAge = (num) => {
  let eleType = exactType(num);
  if(isEmpty(num)) {
    return new TypeError('The parameter cannot be null');
  } else if (eleType !== 'number') {
    return new TypeError('Age can only be a numeric type');
  } else {
      if(num >= 1) {
        return parseInt(num) + '岁';
      } else if(num > 0 && num < 1) {
        return parseInt(num*10) + '个月';
      } else if(num <= 0) {
        return new TypeError('Age cannot be zero and negative');
      } else {
        return new SyntaxError('Unexpected number');
      }
  }
}

export default getZnAge;