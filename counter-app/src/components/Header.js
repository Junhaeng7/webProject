import "./Header.css";
import Navbar from "./Navbar";
import "../App.css";
// import { Link } from "react-router-dom";
import "./Navbar.css";

import React from "react";

function Header() {
  return (
    <>
      <div className="header-middle">
        {/* <Link to="/" className="search-toggle">
          Home
        </Link> */}
        <div className="container ">
          <div className="header-left">
            JunWon
            <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
              <div className="search-toggle">
                <i className="icon-search"></i>
              </div>
            </div>
          </div>
          {/* <div className="header-right">hi</div> */}
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Header;
