import axios from "axios";

const token = localStorage.getItem("token");

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] =
  process.env.REACT_APP_API_URL;
axios.defaults.headers.common.Authorization = `Bearer ${token}`;
axios.defaults.withCredentials = true;
