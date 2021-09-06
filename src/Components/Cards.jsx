import React from "react";
import { Link } from "react-router-dom";
import "../css/Card.scss";

function Cards(props) {
  return (
    <>
      <div className="card">
        <img src={props.imgscr} className="card-img-top" alt={props.name} />
        <div className="card-body headstyle">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text">{props.info}</p>
          <Link to={props.link} className="btn btn-success">
            Know more
          </Link>
        </div>
      </div>
    </>
  );
}
export default Cards;
