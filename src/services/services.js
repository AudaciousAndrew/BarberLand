import axios from "axios";
import config from "../config/configuration";
import NotificationService from "./notifications";

export default class ServicesService {
  constructor() {
    this.notyService = new NotificationService();
  }

  async getService(slug) {
    try {
      const response = await axios.get(`${config.apiUrl}/service/${slug}`);

      return response.data;
    } catch (errors) {
      this.notyService.error(errors);
    }
  }
}
