import axios from "axios";
import config from "../config.json";

const instance = axios.create({
  baseURL: `${config.SERVER}`,
});

instance.defaults.withCredentials = true;

export default instance;
