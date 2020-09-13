import axios from "axios";
import config from "../config/configuration";

export default class ServicesService {
  async getService(slug) {
    try {
      const response = await axios.get(`${config.apiUrl}/service/${slug}`);

      return response.data;
    } catch (errors) {
      this.notyService.error(errors);
    }
  }
}
