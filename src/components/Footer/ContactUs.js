import React from "react";
import './style/footer.css';

const ContactUs = ({ name, url }) => {
  <div className="d-flex">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src="/github-logo.png" className="logo"/>
    </a>
    <p className="text-name">{name}</p>
  </div>
};

export default ContactUs;