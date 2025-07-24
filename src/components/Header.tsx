import React from "react";
import Nav from "./Nav";
import Byline from "./Byline";

const Header = () => {
  return (
    <header
      className="relative min-h-screen flex flex-col"
      role="banner"
      id="top"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 hero-gradient">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
          style={{
            backgroundImage: "url('./images/header.jpeg')",
          }}
        />
      </div>

      {/* Navigation */}
      <div className="relative z-10">
        <Nav />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="container-custom">
          <Byline />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 pb-8 flex justify-center">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-muted-foreground"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="m7 13 5 5 5-5M7 6l5 5 5-5"></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
