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
const browserEnv = (element: string) => {
  const envType = element.toLowerCase();
  let ua: string = "";
  try {
    ua = navigator.userAgent;
    switch (envType) {
      case "pc":
        return !ua.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      case "mobile":
        return ua.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      case "chrome":
        return ua.match(/(Chrome)/i) && ua.match(/Safari/i) && !ua.match(/Edge/i);
      case "firefox":
        return ua.match(/(Firefox)/i);
      case "safari":
        return ua.match(/(Safari)/i) && !ua.match(/Chrome/i);
      case "edge":
        return ua.match(/Edge/i);
      case "opera":
        return ua.match(/(Opera)/i);
      case "ie":
        return window.ActiveXObject || "ActiveXObject" in window;
      case "wechat":
        return ua.match(/MicroMessenger/i);
      case "wxwork":
        return ua.match(/MicroMessenger/i) && ua.match(/wxwork/i);
      case "dingtalk":
        return ua.match(/DingTalk/i);
      default:
        return "borwser";
    }
  } catch (error) {
    return new Error("Please use this function in the browser");
  }
}

export default browserEnv;