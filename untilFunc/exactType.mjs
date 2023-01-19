const classType = {}

'Booblean Number String Function Array Date RegExp Object Error'.split(' ').map(item => {
  classType['[object ' + item + ']'] = item.toLowerCase();
})

/*
  * Determine the data type
  *判断数据类型
  * @since 0.0.1
  * @param {*}.
  * @returns {String}.
  * @example
  * exactType('type')
  * => string
*/
const exactType = (element) => {
  if (element == null||element !== element) {
    return element + '';
  }
  return typeof element === 'object' || typeof element === 'function' ?
  classType[Object.prototype.toString.call(element)] || 'object' :
  typeof element;
}

export default exactType;