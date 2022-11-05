import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const SearchBar = () => {
  return (
    <div class="input-group">
      <div class="form-outline">
        <input
          id="search-input"
          type="search"
         
          class="form-control"
        />
        <label class="form-label" for="form1">
          Search
        </label>
      </div>
      <button id="search-button" type="button" class="btn btn-primary">
        <i class="fas fa-search"></i>
      </button>
    </div>
  );
};
  




function Navbar() {
  return (
    <nav className="navbar">
      <div className="title">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3jW4In7Q9Qvw8veuh_POPC6wJd_SfBmMXwGDhpg&s"
          alt=""
        />
        <h2>PicZone</h2>
      </div>
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="pages-route">
        <ul>
          <li>
            <Link className="home" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="create" to="/create">
              Create
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
