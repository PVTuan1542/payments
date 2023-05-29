import React from "react";
import "../../Style/Header/Header.css";
import SliceShowImage from "./SliceShowImage";

function Header() {
  return (
    <header className="header">
      <SliceShowImage/>
      <div className="container">
        <nav className="navbar">
          <div className="navbar-brand">
            <a href="/" className="navbar-logo">
              Style Now
            </a>
          </div>
          <div className="navbar-menu">
            <ul className="navbar-links">
              <li className="navbar-item">
                <a href="/" className="navbar-link">
                  Home
                </a>
              </li>
              <li className="navbar-item">
                <a href="/messages" className="navbar-link">
                  Messages
                </a>
              </li>
              <li className="navbar-item">
                <a href="/" className="navbar-link">
                  Write a Review
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-actions">
            <form className="search-form">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <button type="submit" className="search-button">
                Search
              </button>
            </form>
            <a href="/login" className="navbar-action">
              Log In
            </a>
            <a href="/signup" className="navbar-action">
              Sign Up
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
