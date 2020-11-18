import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header class="row">
      <div class="col-12">
        {props.children}
      </div>
    </header>
  );
};
export default Header;