import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import { Person } from "@mui/icons-material";
import "./login.css";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    navigate("/");
  };

  return (
    <div className="background">
      <div className="loginbox">
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
          />
        </Helmet>
        <h1> LAMA </h1>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Person
            style={{
              height: "100px",
              width: "100px",
              alignitems: "center",
              border: "2px solid",
              padding: "7px",
              borderRadius: "50%",
            }}
          />
        </div>

        <label>Email address</label>
        <input
          className="form-control"
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input
          className="form-control"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          style={{
            marginTop: "10px",
            color: "#01128B",
            background: "#FBFBFF",
            border: "1px solid",
            borderRadius: "3px",
          }}
          onClick={handleClick}
        >
          Login
        </button>
        <p
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          Copyright &#169; 2022 LAMA Ecommerce.
        </p>
      </div>
    </div>
  );
};

export default Login;
