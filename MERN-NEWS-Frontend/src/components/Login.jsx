import axios from 'axios';
import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import {useNavigate} from 'react-router-dom'
import Navv from "./Navv";
const Login = () => {

    const [_, setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("https://mern-news-api.onrender.com/auth/login", {
        username,
        password,
      });
      window.localStorage.setItem("userID", result.data.userID);
      navigate("/private/news");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    
   <div className="auth-container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
  <form onSubmit={handleSubmit} className="p-4 border rounded">
    <h2>Login</h2>
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
    <button type="submit" className="btn btn-primary">Login</button>
  </form>
</div>

    </>
  );
};


export default Login