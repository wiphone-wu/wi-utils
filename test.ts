import browserEnv from "./func/browserEnv";
import exactType from "./func/exactType";
import getDate from "./func/getDate";
import getQueryStr from "./func/getQueryStr";
import getTimestamp from "./func/getTimestamp";
import getZnAge from "./func/getZnAge";
import isEmpty from "./func/isEmpty";

const aaa = "counter"
console.log(getTimestamp(1668211200000))
console.log(getZnAge(5.5237))
console.log(getDate(2333))
// console.log(browserEnv('pc'))
console.log(exactType("type"))
console.log(getQueryStr("name", "name=jason"))
console.log(isEmpty())