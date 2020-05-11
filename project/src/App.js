import React, { Fragment } from "react";
import "bulma/css/bulma.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import WishList from "./components/WishList"
import Footer from "./components/Footer"

const App = () => {
  const content = window.websiteContent;
  return (
    <Fragment>
      <Navigation content={content.navigation} />
      <Hero content={content.hero} />
      <WishList content={content.wishlist} />
      <Footer content={content.navigation} />
    </Fragment>
  );
};

export default App;
