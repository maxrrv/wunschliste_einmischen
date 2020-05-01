import React from "react";
import "bulma/css/bulma.css";

const Footer = ({ content }) => (
<footer className="footer  ">
  <div className="has-text-centered">
      <a className="is-hidden-desktop" href={content.paypal_link}>
        <i className="fab fa-paypal" style={{marginRight: 10}}/>
      </a>
      <a className="is-hidden-desktop" href={content.twitter_link}>
        <i className="fab fa-twitter" />
      </a>
    <div style={{marginTop: 10}}>Made with 💚</div>
    <div>Something odd? Create a Pull request <a href="https://github.com/maxrru/wunschliste_einmischen">here</a>.</div>
  </div>
</footer>
)

export default Footer
