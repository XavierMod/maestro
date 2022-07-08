// eslint-disable-next-line import/no-cycle
import axios from "./axios";

export const _signin = async (email, password) =>
  await axios.post(`/auth/login`, {
    email,
    password,
  });
