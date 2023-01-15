import { toTitleCase } from "../utils/utils";

const Nav = () => {
  const navComponents = [
    "skills",
    "experience",
    "blog",
    // "tutorials",
    "projects",
    "about",
    "contact",
  ];
  return (
    <div className="row">
      <nav className="nav" role="navigation">
        <ul className="nav__items">
          {navComponents.map((comp) => (
            <li className="nav__item">
              <a href={`#${comp}`} className="nav__link">
                {toTitleCase(comp)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
