const isDev = process.env.NODE_ENV === "development";

export default {
  apiUrl: isDev
    ? "http://localhost:8080/api"
    : "https://barberland.herokuapp.com/api",
};
