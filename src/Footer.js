import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <footer>
        {" "}
        <ul>
          {props.data.map((prop, index) => {
            return <li key={index}>{prop}</li>;
          })}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
