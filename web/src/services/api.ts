import axios from "axios";

const ip = require("ip");

const api = axios.create({
  baseURL: `http://${ip.address()}:3333`,
});

export default api;
