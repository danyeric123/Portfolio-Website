import React from "react";
import Nav from "./Nav";
import Byline from "./Byline";

const Header = () => {
  return (
    <header className="header" role="banner" id="top">
      <Nav />
      <Byline />
    </header>
  );
};

export default Header;
