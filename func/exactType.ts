/*
  * Determine the data type
  *判断数据类型
  * @since 0.0.1
  * @param {*}.
  * @returns {String}.
  * @example
  * exactType("type")
  * => string
*/
const classTypeMap = new Map([
  [Boolean, "boolean"],
  [Number, "number"],
  [String, "string"],
  [Function, "function"],
  [Array, "array"],
  [Date, "date"],
  [RegExp, "regexp"],
  [Object, "object"],
  [Error, "error"],
]);

const exactType = (element: any): string => {
  if (element == null || element !== element) {
    return `${element}`;
  }

  const type = typeof element;
  if (type === "object" || type === "function") {
    const classType = classTypeMap.get(element.constructor) || "object";
    return classType.toLowerCase();
  }
  return type;
};

export default exactType;