import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer>
      <div>
        <h2>{props.title}</h2>
        <div>
          <Link to={props.instagram} ><i className="bi bi-instagram"></i></Link>
          <Link to={props.facebook} ><i className="bi bi-facebook"></i></Link>
          <Link to={props.whatsapp} ><i className="bi bi-whatsapp"></i></Link>
        </div>
      </div>
      <div>
        <small>@ Moeez Ahmad 2023</small>
      </div>
    </footer>
  );
};

export default Footer;
