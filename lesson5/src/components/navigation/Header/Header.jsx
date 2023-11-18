import { NavLink } from "react-router-dom";

import "./style.css";

export const Header = () => {
  const nav = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "countryList",
      title: "Country list",
    },
  ];

  return (
    <header className="site-header">
      <nav className="nav-links">
        <ul>
          {nav.map((item, index) => (
            <li key={index}>
              <NavLink to={item.to}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
