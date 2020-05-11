import React from "react";
import "bulma/css/bulma.css";
import Icon from './Icons'

const Navigation = ({ content }) => (
  <nav className="navbar">
    <div className="navbar-brand">
      <a className="navbar-item" href={content.home_link}>
        <img src={content.home_image} alt="podcast-logo" />
      </a>
      <div className="navbar-item title is-4">{content.title}</div>
    </div>
    <div className="navbar-end is-hidden-touch">
      <a className="navbar-item" href={content.paypal_link}>
        <Icon type="paypal" />
      </a>
      <a className="navbar-item" href={content.twitter_link}>
        <Icon type="twitter" />
      </a>
    </div>
  </nav>
);

export default Navigation;
