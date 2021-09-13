import React from "react";
import logo from "./static/images/logo.png";
import "../src/css/style.css";
import SearchBar from "./Components/searchBar";
import { Data } from "./Data/descrip";

function Header({ handleSearch, searchValue }) {
  return (
    <div>
      {/* navbar start */}
      <div className="bg-img">
        <nav className="navbar navBg navbar-expand-lg">
          <div className="container-fluid">
            <a href="index.html">
              <img className="img-responsive2 navLogo" src={logo} alt="Logo" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span claclassNamess="navbar-toggler-icon"></span>
            </button>

            <div
              claclassNames="collapse navbar-collapse w-150 flex-sm-column"
              id="navbarCollapse"
            >
              <ul>
                <li>
                  <span className="social-number">
                    <i className="fa fa-phone" aria-hidden="true">
                      : +91 94394 45511
                    </i>
                  </span>
                </li>

                <li>
                  <span className="social-icon social-facebook">
                    <i className="fa fa-facebook"></i>
                  </span>
                </li>
                <li>
                  <span className="social-icon social-google">
                    <i className="fa fa-google"></i>
                  </span>
                </li>
                <li>
                  <span className="social-icon social-linkedin">
                    <i className="fa fa-linkedin"></i>
                  </span>
                </li>
                <li>
                  <span className="social-icon social-instagram">
                    <i className="fa fa-instagram"></i>
                  </span>
                </li>
                <li>
                  <span className="social-icon social-twitter">
                    <i className="fa fa-twitter"></i>
                  </span>
                </li>
              </ul>

              <br />
              <SearchBar
                handleSearch={handleSearch}
                searchValue={searchValue}
                placeholder="Search Recipe"
                data={Data}
              />
            </div>
          </div>
        </nav>
      </div>

      {/* <!--Second navbar--> */}
      <div className="navbar2 navbar-expand-lg bgColNav">
        <div className="container-md">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item nav-Link" href="#">
              RECIPE
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- navbar ended --> */}
    </div>
  );
}

export default Header;
