import React, { useState } from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header
        className="header"
        style={{
          padding: "20px",
          position: "absolute",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <img src={logo} alt="" />
        </div>
        {isOpen && (
          <nav style={{ color: "white",position: "relative", right: "-1200px"  }}>
            <ul style={{ listStyle: "none" }}>
              <li>About</li>
              <li>Discover</li>
              <li>Get started</li>
            </ul>
          </nav>
        )}
        <div>
          <img
            src={hamburger}
            style={{ position: "realtive", right: "-1200px" }}
            onClick={() => setIsOpen(!isOpen)}
            alt=""
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
