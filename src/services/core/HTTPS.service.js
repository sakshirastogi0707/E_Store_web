import axios from "axios";
import { baseUrl } from "./service.config";
const HTTP = axios.create({
  baseUrl,
});

export default HTTP;
