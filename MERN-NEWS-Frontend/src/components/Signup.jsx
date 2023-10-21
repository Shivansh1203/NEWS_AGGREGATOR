import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Navv from "./Navv";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://mern-news-api.onrender.com/auth/register", {
        username,
        password,
      });
      alert("Registration Completed! Now login.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <Navv />

    <div className="auth-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
  <form onSubmit={handleSubmit}>
    <h2>Register</h2>
    <div className="form-group">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        className="form-control"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        className="form-control"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
    </div>
    <button type="submit" className="btn btn-primary">Register</button>
  </form>
</div>
    </>
  );
};

export default Signup;
