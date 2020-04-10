import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

const App = () => {
  const content = window.websiteContent;
  return (
    <Fragment>
      <Navigation content={content.navigation} />
      <Hero content={content.hero} />
    </Fragment>
  );
};

export default App;
