import React from "react";
import "./styles.css";

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <ul className="navbar">
      {childrenArray.map((child, index) => (
        <li className="navbarElement" key={index}>{child}</li>
      ))}
    </ul>
  );
};

export default NavBar;