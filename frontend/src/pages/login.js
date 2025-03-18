import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${API_URL}/login`, { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-container">
      <div className="login-page">
        <h3 className="login-title">Login</h3>

        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="password">Password :</label>
            <input
              type="password"
              placeholder="Enter Password"
              required
              onChange={(event) => setPassword(event.target.value)}
            />

            <button type="submit" className="btn login-btn">
              Log In
            </button>
          </div>
        </form>

        <div className="signup">
          <p>Don't have an Account ?</p>
          <Link to="/signup" type="button">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
