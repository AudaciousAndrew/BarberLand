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
      min: "Minimum 4 characters required",
      string: "Wrong string format",
      required: "The {{ field }} is required",
      "email.email": "The email is invalid",
      "password.confirmed": "The passwords doesn't match"
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
      const formatedErrors = {};
      if (errors.response) {
        let fieldName = Object.keys(errors.response.data)[0];
        formatedErrors[fieldName] = errors.response.data[fieldName];
      } else {
        errors.forEach(error => (formatedErrors[error.field] = error.message));
      }
      return Promise.reject(formatedErrors);
    }
  }

  async loginUser(data) {
    const rules = {
      login: "required|string|min:4|max:40",
      password: "required|string|min:4|max:255"
    };
    const messages = {
      min: "Minimum 4 characters required",
      string: "Wrong string format",
      required: "The {{ field }} is required",
    };

    try {
      await validateAll(data, rules, messages);

      const response = await axios.post(`${config.apiUrl}/user/login`, {
        login: data.login,
        password: data.password
      });

      return response;
    } catch (errors) {
      const formatedErrors = {};
      if (errors.response) {
        let fieldName = Object.keys(errors.response.data)[0];
        formatedErrors['login'] = errors.response.data[fieldName];
      } else {
        errors.forEach(error => (formatedErrors[error.field] = error.message));
      }
      return Promise.reject(formatedErrors);
    }
  }
}
