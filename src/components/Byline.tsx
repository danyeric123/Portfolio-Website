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
        {/* <a href="https://www.buymeacoffee.com/dnagarpowers" className="btn"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=dnagarpowers&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a> */}
      </div>
    </div>
  );
};

export default Byline;
