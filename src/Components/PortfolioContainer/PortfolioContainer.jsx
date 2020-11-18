import React from "react";
import "./PortfolioContainer.css"

function Container(props) {
    return (
        <>
        <section className="row">
        <figure className="col-12-col-sm-12-col-md-12-col-lg-6">
        <img
          className="img-fluid img-portfolio"
          alt={props.name}
          src={props.image}
        />
      </figure>
      <div className="row"></div>
      <div className="col-5"></div>
      <div className="col-2">
        <a
          href={props.github}
          target="_blank"
          rel="noreferrer"
          ><i className="fab fa-github fa-2x" 
        //   style="color: #7d6d61"
        ></i
        ></a>
      </div>
      <div className="col-2">
        <a href={props.website} target="_blank"
        rel="noreferrer"
          ><i className="far fa-window-maximize fa-2x" 
        //   style="color: #7d6d61"
        ></i
        ></a>
      </div>
      <div className="col-5"></div>
      </section>
      </>
  );
}

export default Container;