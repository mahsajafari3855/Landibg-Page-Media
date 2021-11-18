import React from "react";

const FooterBottom = () => {
  return (
    <div id="footer-bottom-area" className="fix home-3">
      <div className="container">
        <div className="row justify-content-between text-center">
          <div className="copyright col-12 col-md-auto">
            <p>
              Copyright © <a href="www.bootexperts.com">BootExperts</a>. All
              Rights Reserved
            </p>
          </div>
          <div className="footer-menu col-12 col-md-auto">
            <nav>
              <ul>
                <li>
                  <a href="#">Our team</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
                <li>
                  <a href="#">Sign In</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
