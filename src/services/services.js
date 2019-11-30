// import { validateAll } from "indicative/validator";
import axios from "axios";
import config from "../config/configuration";

export default class ServicesService {
  async getService(slug) {
      const response = await axios.get(`${config.apiUrl}/service/${slug}`);

      return response.data;
  }
}
