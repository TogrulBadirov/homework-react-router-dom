import React from 'react';
import './index.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="siteInfo">
        <nav className="footerNav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Shortcodes</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Languages</a></li>
          </ul>
        </nav>
        <div className="copyright">
          <a href="#">Dazzling Demo</a> All rights reserved. Theme by <a href="#">Colorlib</a> Powered by <a href="#">WordPress</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;