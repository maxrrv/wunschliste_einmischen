import React from "react";
import "bulma/css/bulma.css";

const Footer = ({ content }) => (
<footer class="footer  is-hidden-desktop">
  <div class="has-text-centered">
      <a className="navbar-item" href={content.paypal_link}>
        <i className="fab fa-paypal" />
      </a>
      <a className="navbar-item" href={content.twitter_link}>
        <i className="fab fa-twitter" />
      </a>
  </div>
</footer>
)

export default Footer