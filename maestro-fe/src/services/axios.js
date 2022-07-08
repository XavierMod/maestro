/* eslint-disable import/no-cycle */
import axios from "axios";
import { getItem, setItem } from "./token";

const instance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_API_URL,
});

// request header
// instance.interceptors.request.use(
//   async (config) => {
//     const token = getItem("@maestro-auth");
//     if (token !== null || token !== undefined) {
//       // eslint-disable-next-line no-param-reassign
//       config.headers.common = { Authorization: `Bearer ${await token}` };
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// instance.interceptors.response.use(undefined, (err) => {
//   if (err.response.status === 401) {
//     // console.log('error', error);
//     // setItem("@maestro-auth", null);
//   }
//   return err;
// });

export default instance;
