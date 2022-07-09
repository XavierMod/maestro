// eslint-disable-next-line import/no-cycle
import axios from "./axios";

export const status = async (email, password) =>
  await axios.get(`/status`);

export const _signin = async (email, password) =>
  await axios.post(`/auth/login`, {
    email,
    password,
  });
