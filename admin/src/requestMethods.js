import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;

// const Token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWM1NWZjMmY1MTUwNDA4NWNmYjU2MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTgwMDEwMSwiZXhwIjoxNjcyMDU5MzAxfQ.xUcyUJGoI8cb6ySb4qSSsLqe2mzXdKmi2e9TnmFTGXo";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${Token} ` },
});
