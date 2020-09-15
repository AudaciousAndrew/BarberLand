import axios from "axios";
import config from "../config/configuration";

export default class ProfileService {
  async updateData(data) {
    try {
      await axios.put(`${config.apiUrl}/profile/update`, data.user, {
        headers: {
          "auth-token": data.token,
        },
      });
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...data,
        })
      );
      this.notyService.success("Info successfully updated.");
    } catch (error) {
      this.notyService.error(error);
    }
  }
}
