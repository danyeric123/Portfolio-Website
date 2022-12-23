import { useState } from "react";

const Nav = () => {
  return (
    <div className="row">
      <nav className="nav" role="navigation">
        <ul className="nav__items">
          <li className="nav__item">
            <a href="#projects" className="nav__link">
              Projects
            </a>
          </li>
          <li className="nav__item">
            <a href="#blog" className="nav__link">
              Blog
            </a>
          </li>
          <li className="nav__item">
            <a href="#tutorials" className="nav__link">
              Tutorials
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link">
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
