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
const isEmpty = (element?: any) => {
  let eleType = exactType(element);
  switch (eleType) {
    case "error":
      return new TypeError("Error type parameters are invalid");
    case "regexp":
      return new TypeError("Regexp type parameters are invalid");
    case "function":
      return new TypeError("Function type parameters are invalid");
    case "date":
      if(element instanceof Date && isNaN(element.getTime())) {
        return new TypeError("Function type parameters are invalid");
      } else {
        return false;
      }
    case "null":
      return true;
    case "undefined":
      return true;
    case "NaN":
      return true;
    case "string":
      if(element === ""||element === "null"||element === "undefined"||element === "[]"||element === "{}"||element === "[{}]") {
        return true;
      } else {
        return false;
      }
    case "symbol":
      let symbols = Object.getOwnPropertySymbols(element);
      if(symbols.length === 0) {
        return true;
      } else {
        return false;
      }
    case "object":
      let objectSymbols = Object.getOwnPropertySymbols(element);
      if(objectSymbols.length > 0) {
        return false;
      } else {
        for (let key in element) {
          return false;
        }
        return true;
      }
    case "array":
      if(element.length === 0) {
        return true;
      } else {
        return false;
      }
    default:
      return false;
  }
}

export default isEmpty;