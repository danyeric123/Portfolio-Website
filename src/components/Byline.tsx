import React from "react";

const Byline = () => {
  return (
    <div className="header__text-box row">
      <div className="header__text">
        <h1 className="heading-primary">
          <span>David Nagarpowers</span>
        </h1>
        <p>A Software Engineer based in New York, NY.</p>
        <a href="#contact" className="btn btn--pink">
          Get in touch
        </a>
      </div>
    </div>
  );
};

export default Byline;
