import React from "react";
import "bulma/css/bulma.css";
import Icon from './Icons'

const Footer = ({ content }) => (
  <footer className="footer  ">
    <div className="has-text-centered">
      <span style={{marginRight:10}}>
        <a className="is-hidden-desktop" href={content.paypal_link}>
          <Icon type="paypal" />
        </a>
      </span>
      <a className="is-hidden-desktop" href={content.twitter_link}>
        <Icon type="twitter" />
      </a>
      <div style={{marginTop: 10}}>Made with <span role='img' aria-label='heart'>💚</span></div>
    </div>
  </footer>
)

export default Footer
