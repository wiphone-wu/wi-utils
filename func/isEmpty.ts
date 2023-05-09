import exactType from "./exactType"

/*
  * Determine if it is empty
  * 判断是否为空
  * @since 0.0.1
  * @param {*}.
  * @returns {Boolean}.
  * @example
  * isEmpty("empty")
  * => false
*/
const isEmpty = (element?: any): boolean | TypeError => {
  const eleType = exactType(element);
  switch (eleType) {
    case "error":
    case "regexp":
    case "function":
      return new TypeError(`${eleType} type parameters are invalid`);
    case "date":
      return element instanceof Date && isNaN(element.getTime())
        ? new TypeError("Date type parameters are invalid")
        : false;
    case "null":
    case "undefined":
    case "NaN":
      return true;
    case "string":
      return ["", "null", "undefined", "[]", "{}", "[{}]"].includes(element);
    case "symbol":
      return Object.getOwnPropertySymbols(element).length === 0;
    case "object":
      return (
        Object.getOwnPropertySymbols(element).length === 0 &&
        Object.keys(element).every((key) => isEmpty(element[key]))
      );
    case "array":
      return element.length === 0;
    default:
      return false;
  }
};

export default isEmpty;