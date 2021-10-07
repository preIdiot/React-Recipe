import React from "react";
import { Link } from "react-router-dom";
import "../css/Card.scss";

function Cards(props) {
  return (
    <div className="card">
      <Link to={props.link} className="card-link">
        <img src={props.imgscr} className="card-img-top" alt={props.name} />
        <div className="card-body headstyle">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text">{props.info}</p>
        </div>
      </Link>
    </div>
  );
}
export default Cards;
