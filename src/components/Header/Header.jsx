import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menu, setMenu] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      {menu === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.56rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenu(true)}
        >
          <img src={Bars} alt="" style={{ width: "1.5rem", height: "1.5rem" }} />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link onClick={() => setMenu(false)} to="home" span={true} smooth={true}>
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link onClick={() => setMenu(false)} to="programs" span={true} smooth={true}>
              Programs
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenu(false)} to="reasons" span={true} smooth={true}>
              Why us
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
