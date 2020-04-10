import React from "react";
import "bulma/css/bulma.css";

const Navigation = ({ content }) => (
  <nav className="navbar">
    <div className="navbar-brand">
      <a className="navbar-item" href={content.home_link}>
        <img src={content.home_image} alt="podcast-logo" />
      </a>
      <div className="navbar-item title is-4">{content.title}</div>
    </div>
    <div className="navbar-end">
      <a className="navbar-item" href={content.paypal_link}>
        <i className="fab fa-paypal" />
      </a>
      <a className="navbar-item" href={content.twitter_link}>
        <i className="fab fa-twitter" />
      </a>
    </div>
  </nav>
);

export default Navigation;
