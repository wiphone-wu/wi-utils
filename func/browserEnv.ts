/*
  * Determine the browser environment(Experimental function, use with caution)
  *判断浏览器环境(实验功能，慎用)
  * @since 0.0.4
  * @param {string}.
  * @returns {Boolean}.
  * @example
  * browserEnv("pc")
  * => true
*/
type EnvType = "pc" | "mobile" | "chrome" | "firefox" | "safari" | "edge" | "opera" | "ie" | "wechat" | "wxwork" | "dingtalk";

const PC_REGEX = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
const CHROME_REGEX = /(Chrome)/i;
const SAFARI_REGEX = /(Safari)/i;
const EDGE_REGEX = /(Edge)/i;
const FIREFOX_REGEX = /(Firefox)/i;
const OPERA_REGEX = /(Opera)/i;
const MICROSOFT_BROWSER_REGEX = /(?:Trident\/.*rv:|Microsoft Edge\/)/i;
const WECHAT_REGEX = /MicroMessenger/i;
const WXWORK_REGEX = /wxwork/i;
const DINGTALK_REGEX = /DingTalk/i;

const browserEnv = (element: EnvType): boolean | Error => {
  const envType = element.toLowerCase();
  let ua: string = "";
  try {
    ua = navigator.userAgent;
    switch (envType) {
      case "pc":
        return !ua.match(PC_REGEX);
      case "mobile":
        return ua.match(PC_REGEX);
      case "chrome":
        return ua.match(CHROME_REGEX) && ua.match(SAFARI_REGEX) && !ua.match(EDGE_REGEX);
      case "firefox":
        return ua.match(FIREFOX_REGEX);
      case "safari":
        return ua.match(SAFARI_REGEX) && !ua.match(CHROME_REGEX);
      case "edge":
        return ua.match(EDGE_REGEX);
      case "opera":
        return ua.match(OPERA_REGEX);
      case "ie":
        return window.ActiveXObject || "ActiveXObject" in window || ua.match(MICROSOFT_BROWSER_REGEX);
      case "wechat":
        return ua.match(WECHAT_REGEX);
      case "wxwork":
        return ua.match(WECHAT_REGEX) && ua.match(WXWORK_REGEX);
      case "dingtalk":
        return ua.match(DINGTALK_REGEX);
      default:
        return false;
    }
  } catch (error) {
    return new Error("Please use this function in the browser");
  }
};

export default browserEnv;