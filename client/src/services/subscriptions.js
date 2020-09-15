import axios from "axios";
import config from "../config/configuration";
import { validateAll } from "indicative/validator";

export default class SubscriptionsService {
  async subscribe(data) {
    const rules = {
      firstname: "required|string",
      lastname: "required|string",
      phone: "required|string",
    };
    const messages = {
      required: "Please provide your {{ field }}.",
      string: "Wrong string format",
    };

    try {
      await validateAll(data, rules, messages);

      const response = await axios.post(
        `${config.apiUrl}/subscription/add`,
        data
      );
      if (response.data.status === "success") {
        this.notyService.success(response.data.message);
      } else {
        this.notyService.error(response.data.message);
      }
    } catch (errors) {
      errors.forEach((element) => this.notyService.error(element.message));
    }
  }

  async unsubscribe(userId, type, token) {
    try {
      const response = await axios.delete(
        `${config.apiUrl}/subscription/delete`,
        { type, userId },
        {
          headers: {
            "auth-token": token,
          },
        }
      );
      if (response.data.status === "success") {
        this.notyService.success(response.data.message);
      } else {
        this.notyService.error(response.data.message);
      }
    } catch (error) {
      this.notyService.error(error);
    }
  }

  async removeAll(userId, token) {
    try {
      const response = await axios.delete(
        `${config.apiUrl}/subscription/delete/all`,
        { userId },
        {
          headers: {
            "auth-token": token,
          },
        }
      );
      if (response.data.status === "success") {
        this.notyService.success(response.data.message);
      } else {
        this.notyService.error(response.data.message);
      }
    } catch (error) {
      this.notyService.error(error);
    }
  }

  async getAll(userId, token) {
    try {
      const response = await axios.post(
        `${config.apiUrl}/subscription/get/all`,
        { userId },
        {
          headers: {
            "auth-token": token,
          },
        }
      );
      return response.data;
    } catch (error) {
      this.notyService.error(error);
    }
  }

  async removeOne(userId, token, subId) {
    try {
      await axios.delete(
        `${config.apiUrl}/subscription/delete/one`,
        { userId, subId },
        {
          headers: {
            "auth-token": token,
          },
        }
      );
    } catch (error) {
      this.notyService.error(error);
    }
  }
}
