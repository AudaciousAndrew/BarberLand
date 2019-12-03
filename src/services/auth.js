import { validateAll } from "indicative/validator";
import axios from "axios";
import config from "../config/configuration";

export default class AuthService {
  async registerUser(data) {
    const rules = {
      login: "required|string|min:4|max:40",
      email: "required|email",
      password: "required|string|min:4|max:255|confirmed"
    };
    const messages = {
      min: "The {{ field }} requires minimum 4 characters.",
      string: "Wrong string format.",
      required: "The {{ field }} is required.",
      "email.email": "The email is invalid.",
      "password.confirmed": "The passwords doesn't match."
    };

    try {
      await validateAll(data, rules, messages);

      const response = await axios.post(`${config.apiUrl}/user/register`, {
        login: data.login,
        password: data.password,
        email: data.email
      });

      return response;
    } catch (errors) {
      if (errors.response) {
        this.notyService.error(errors.response.data.error);
      } else {
        errors.forEach(error => this.notyService.error(error.message));
      }
      return Promise.reject();
    }
  }

  async loginUser(data) {
    const rules = {
      login: "required|string|min:4|max:40",
      password: "required|string|min:4|max:255"
    };
    const messages = {
      min: "The {{ field }} requires minimum 4 characters.",
      string: "Wrong string format.",
      required: "The {{ field }} is required.",
    };

    try {
      await validateAll(data, rules, messages);

      const response = await axios.post(`${config.apiUrl}/user/login`, {
        login: data.login,
        password: data.password
      });

      return response;
    } catch (errors) {
      if (errors.response) {
        this.notyService.error(errors.response.data.error);
      } else {
        errors.forEach(error => this.notyService.error(error.message));
      }
      return Promise.reject();
    }
  }
}
