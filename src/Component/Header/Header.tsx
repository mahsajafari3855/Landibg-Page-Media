import React from "react";
import MainMenu from "./Main-Menu";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div id="main-menu" className="sticker home-3">
      <div className="container">
        <div className="row justify-content-between">
          <Logo />
          <MainMenu />
          <div className="mobile-menu col-12 d-block d-lg-none" />
        </div>
      </div>
    </div>
  );
};

export default Header;
