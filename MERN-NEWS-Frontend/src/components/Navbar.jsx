import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg";
import {useNavigate} from 'react-router-dom'

const Navbar = ({ reload, onNavItemClick, onSearchButtonClick }) => {
  const navigate = useNavigate();
  async function signOut(event) {
    event.preventDefault();
    event.stopPropagation();
    localStorage.clear();
    navigate("/");
  }
  // let [userInfo, setuserInfo] = useState({});
  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem("userID")) != null) {
  //     setuserInfo(JSON.parse(localStorage.getItem("user")));
  //   }
  // }, [])

  return (
    <nav>
      <div className="main-nav container flex">
        <a href="#" onClick={reload} className="company-logo">
          <img src={logo} alt="company logo" />
        </a>
        <div className="nav-links">
          <ul className="flex">
            <li
              className="hover-link nav-item"
              id="ipl"
              onClick={() => onNavItemClick("ipl")}
            >
              IPL
            </li>
            <li
              className="hover-link nav-item"
              id="finance"
              onClick={() => onNavItemClick("finance")}
            >
              Finance
            </li>
            <li
              className="hover-link nav-item"
              id="politics"
              onClick={() => onNavItemClick("politics")}
            >
              Politics
            </li>
          </ul>
        </div>
        <div className="search-bar flex">
          <input
            id="search-text"
            type="text"
            className="news-input"
            placeholder="e.g. Science"
            onChange={(e) => onSearchButtonClick(e.target.value)}
          />
          <button
            id="search-button"
            className="search-button"
            onClick={signOut}
          >
            SignOut
          </button>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
