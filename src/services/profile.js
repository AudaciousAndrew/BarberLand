import axios from "axios";
import config from "../config/configuration";
import NotificationService from "./notifications";

export default class ProfileService {

  constructor() {
    this.notyService = new NotificationService();
  }
  
  async updateData(data) {
    try {
      await axios.post(`${config.apiUrl}/profile/update`, data.user, {
        headers: {
          "auth-token": data.token
        }
      });
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...data
        })
      );
      this.notyService.success("Info successfully updated.");
    } catch (error) {
      this.notyService.error(error);
    }
  }
}
