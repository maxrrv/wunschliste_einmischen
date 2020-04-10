import React from "react";
import "bulma/css/bulma.css";

const Hero = ({ content }) => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h2 className="subtitle">{content.text}</h2>
      </div>
    </div>
  </section>
);

export default Hero;
