import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWM1NWZjMmY1MTUwNDA4NWNmYjU2MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTQzODk1NiwiZXhwIjoxNjcxNjk4MTU2fQ.svaAkCOTSY3yPlMmalWIQcxoPxoYttoGU97xOUJxfC8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${Token} ` },
});
