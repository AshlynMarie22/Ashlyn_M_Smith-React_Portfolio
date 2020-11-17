import React from "react";
import "./PortfolioContainer.css"

function Container(props) {
    return (
        <>
        <figure class="col-12-col-sm-12-col-md-12-col-lg-6">
        <img
          class="img-fluid img-portfolio"
          src={props.image}
        />
      </figure>
      <div class="row"></div>
      <div class="col-5"></div>
      <div class="col-2">
        <a
          href={props.github}
          target="_blank"
          ><i class="fab fa-github fa-2x" 
        //   style="color: #7d6d61"
        ></i
        ></a>
      </div>
      <div class="col-2">
        <a href={props.website} target="_blank"
          ><i class="far fa-window-maximize fa-2x" 
        //   style="color: #7d6d61"
        ></i
        ></a>
      </div>
      <div class="col-5"></div>
      </>
  );
}

export default Container;