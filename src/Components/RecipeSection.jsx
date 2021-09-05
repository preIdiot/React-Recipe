import React from "react";

import "../css/RecipeSection.scss";

export default function RecipeSection(props) {
  const data = props.location.state;
  return (
    <div className="recipeSection">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <center>
            <h1>{data.recipename}</h1>
          </center>
        </div>
        <div className="col-md-2">
          <button
            type="button"
            className="btn btn-light btn-lg"
            onClick={() => {
              window.print();
            }}
          >
            <i className="fa fa-print" aria-hidden="true"></i>Print
          </button>
        </div>
      </div>
      <br />
      <div className="row">
        {/* <div className="col-md-1"></div> */}
        <div className="col-md-3">
          <div className="container-fluid">
            <img
              className="img-responsive2 navLogo imgStyle"
              src={data.imgfile}
              alt=""
            />
          </div>
        </div>
        {/* <div className="col-md-1"></div> */}

        <div className="col-md-6">
          <p>{data.description}</p>
          <div className="card-body">
            <div>
              <i className="fa fa-cutlery fa-lg marginRight">
                {" "}
                Recipe Servings: {data.recipeServings}
              </i>
              <i className="fa fa-clock-o fa-lg marginTop">
                {" "}
                Pre Time: {data.preTime}
              </i>
            </div>
            <br />
            <div>
              <i className="fa fa-clock-o fa-lg marginRight">
                {" "}
                Cook Time: {data.cookTime}
              </i>
              <i
                className="fa fa-clock-o fa-lg marginTop"
                style={{ marginTop: "6px" }}
              >
                {" "}
                Total Time: {data.totalTime}
              </i>
            </div>
          </div>
        </div>
        {/* <div className="col-md-1"></div> */}
      </div>

      <br />
      <br />
      <div className="row">
        <div className="col-md-4 part1">
          <h4>Ingredients Of {data.recipename}</h4>
          <br />
          <h5>
            <tr>
              {data.ingredients.map((ingredient, i) => {
                return <li key={i}>{ingredient}</li>;
              })}
            </tr>
          </h5>
        </div>

        <div className="col-md-1"></div>

        <div className="col-md-6 part2">
          <h3>How to Make {data.recipename}</h3>
          <br />
          {data.steps.map((step, i) => {
            return <p key={i}>{step}</p>;
          })}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
