import axios from "axios";
import config from "../config/configuration";
import NotificationService from "./notifications";

export default class SubscriptionsService {
  constructor() {
    this.notyService = new NotificationService();
  }

  async subscribe(data) {
    try {
      const response = await axios.post(
        `${config.apiUrl}/subscription/add`,
        data
      );
      if (response.data.status === "success") {
        this.notyService.success(response.data.message);
      } else {
        this.notyService.error(response.data.message);
      }
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async unsubscribe(userId, type) {
    try {
      const response = await axios.post(
        `${config.apiUrl}/subscription/delete`,
        { type, userId }
      );
      if (response.data.status === "success") {
        this.notyService.success(response.data.message);
      } else {
        this.notyService.error(response.data.message);
      }
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
