import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(window.innerWidth > 450);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setShowMenu(window.innerWidth > 450);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav style={{ background: props.bg, color: props.color }}>
        <Link to="/" style={{ background: props.bg, color: props.color }}>
          <h3>{props.title}</h3>
        </Link>
        <ul
          style={{
            background: props.bg,
            color: props.color,
            display: showMenu ? "flex" : "none",
          }}
        >
          <Link to="/" style={{ background: props.bg, color: props.color }}>
            <li style={{ background: props.bg, color: props.color }}>
              {props.first}
            </li>
          </Link>
          <Link
            to={`/${props.second}`}
            style={{ background: props.bg, color: props.color }}
          >
            <li style={{ background: props.bg, color: props.color }}>
              {props.second}
            </li>
          </Link>
          <Link
            to={`/${props.third}`}
            style={{ background: props.bg, color: props.color }}
          >
            <li style={{ background: props.bg, color: props.color }}>
              {props.third}
            </li>
          </Link>
        </ul>
        <i
          style={{ background: props.bg, color: props.color }}
          onClick={toggleMenu}
          className="bi bi-list"
        ></i>
    </nav>
  );
};

export default Navbar;
