import React from "react";
import "../css/SubCat.scss";
import { Link } from "react-router-dom";

function Subcat(props) {
  return (
    <div>
      <Link id="recipeLink" to={{ pathname: "/recipe", state: props }}>
        <div className="card gallery__item">
          <img src={props.imgfile} className="gallery__img" alt="mypic" />
          <div className="card-body">
            <h6 className="card-title gallery_font">{props.recipename}</h6>
            <hr />
            <div className="fstyle">
              <i className="fa fa-cutlery fa-lg">
                <p>Recipe Servings:{props.recipieServe}</p>
              </i>
              <i className="fa fa-clock-o fa-lg">
                {" "}
                <p>Pre Time:{props.preTime}</p>
              </i>
              <i className="fa fa-clock-o fa-lg">
                {" "}
                <p>Cook Time:{props.cookTime}</p>
              </i>
              <i className="fa fa-clock-o fa-lg">
                <p>Total Time:{props.totalTime}</p>
              </i>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default Subcat;
