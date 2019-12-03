import Noty from "noty";

export default class NotificationService {
  success(message) {
    new Noty({
      text: message,
      type: "success",
      layout: "topRight",
      timeout: 3000,
      closeWith: ["button"]
    }).show();
  }

  error(message) {
    new Noty({
      text: message,
      type: "error",
      layout: "topRight",
      timeout: 5000,
      closeWith: ["button"]
    }).show();
  }
}
