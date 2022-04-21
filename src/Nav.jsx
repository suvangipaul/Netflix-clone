import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import SearchIcon from "./assets/SearchIcon.png";

function Nav() {
  const [show, handleShow] = useState(false);
  const [showsearch, setSearch] = useState(false);
  const setshowClass = showsearch
    ? "browse display-block"
    : "browse display-none";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "nav-black"}`}>
      <header className="nav-container">
        <div className="header-left">
          <img
            className="nav-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Netflix-Logo"
          />

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tvshows">TV Shows</Link>
            </li>
            <li>
              <Link to="/new">New & Popular</Link>
            </li>
            <li>
              <Link to="/mylist">My List</Link>
            </li>
          </ul>
        </div>

        <div className="header-right">
          <ul>
            <li>
              <img
                className="search"
                src={SearchIcon}
                onClick={() => setSearch(!showsearch)}
                alt=""
              />
            </li>
            <li>
              <input
                type="text"
                className={setshowClass}
                placeholder="Titles, People, Genre"
              />
            </li>
          </ul>

          <div className="dropdown">
            <img
              className="nav-avatar"
              src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
              alt="Netflix Avatar"
            />
            <div className="user-dropdown">
              <a href="/dashboard">Manage Profiles</a>
              <a href="/">User1</a>
              <a href="/">Account</a>
              <a href="/">Help Center</a>
              <a href="/">Sign out of Netflix</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
