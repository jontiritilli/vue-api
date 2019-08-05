import axios from "axios";

const Api = () => {
  return axios.create({
    baseURL: `https://yts.lt/api/v2`,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};

export default Api;
