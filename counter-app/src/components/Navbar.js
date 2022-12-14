import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
// import { Buton } from "./Buton";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
            <i class="fab fa-typo3" />
          </Link>
          {/* <li className="nav-item"> */}
          <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
            Services
          </Link>
          {/* </li> */}
          {/* <li className="nav-item"> */}
          <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
            Products
          </Link>
          {/* </li> */}
          {/* <li className="nav-item"> */}
          <Link to="/shop" className="nav-links" onClick={closeMobileMenu}>
            Shop
          </Link>
          {/* </li> */}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            {button && <Button buttonStyle="btn--outline">Login In</Button>}
          </ul>
          <Button
            buttonStyle="btn--outline"
            style={{ width: "3rem", height: "3rem" }}
            //   variant="outline-primary"
            className="rounded-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
            cart
          </Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
