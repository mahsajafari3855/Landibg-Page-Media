import React from "react";

const MainMenu = () => {
  return (
    <div className="main-menu col-lg-auto col-12 d-none d-lg-flex flex-wrap">
      <nav>
        <ul>
          <li className="active">
            <a href="#home-area">Home</a>
          </li>
          <li>
            <a href="#about-area">About us</a>
          </li>
          <li>
            <a href="#feature-area">RainMedia </a>
          </li>
          <li>
            <a href="#video-area">App Web</a>
          </li>

          <li>
            <a href="#support-area">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
