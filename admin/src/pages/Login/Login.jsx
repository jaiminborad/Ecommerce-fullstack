import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import { Person } from "@mui/icons-material";
import "./login.css";
import { Helmet } from "react-helmet";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="loginbox">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
      </Helmet>
      <h1> Login </h1>

      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Person
          style={{
            height: "70px",
            width: "70px",
            color: "green",
            alignitems: "center",
          }}
        />
      </div>

      <label className="form-label">Email address</label>
      <input
        className="form-control"
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <label className="form-label">Password</label>
      <input
        className="form-control"
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-success" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default Login;
