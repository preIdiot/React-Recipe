import React from "react";
import "../css/SubCat.scss";
import { Link } from "react-router-dom";

function Subcat(props) {
  return (
    <div>
      <Link to={{ pathname: "/recipe", state: props }}>
        <div className="card gallery__item">
          <img src={props.imgfile} className="gallery__img" alt="mypic" />
          <div className="card-body">
            <h6 className="card-title gallery_font">{props.recipename}</h6>
            <hr />
            <div className="fstyle">
              <i className="fa fa-cutlery fa-lg">
                Recipe Servings:{props.recipieServe}
              </i>
              <i className="fa fa-clock-o fa-lg"> Pre Time:{props.preTime}</i>
              <i className="fa fa-clock-o fa-lg"> Cook Time:{props.cookTime}</i>
              <i className="fa fa-clock-o fa-lg">
                Total Time:{props.totaltime}
              </i>
            </div>
          </div>
          {/* <Link to="/healthyrecipies/recipe">
            <button></button>
          </Link> */}
        </div>
      </Link>
    </div>
  );
}
export default Subcat;
