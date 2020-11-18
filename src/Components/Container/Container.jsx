import React from "react";
import "./Container.css"

function Container(props) {
    return (
<main className="container" id={props.children}>{props.children}
</main>
  );
}

export default Container;
