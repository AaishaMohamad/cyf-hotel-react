import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <footer>
        {" "}
        <ul>
          {props.data.map(prop => {
            return <li>{prop}</li>;
          })}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
