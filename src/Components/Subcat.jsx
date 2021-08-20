import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

function Subcat(props) {
  console.log(props);
    return (
      <div>
        
        <div className="card gallery__item">
        <img src={props.imgscr} className="gallery__img" alt="mypic"/>
        <div className="card-body">
          <h6 className="card-title gallery_font">{props.title}</h6>
          <hr/>
          <div className="fstyle">
            <i className="fa fa-cutlery fa-lg"> Recipe Servings:{props.recipieServe}</i>
            <i className="fa fa-clock-o fa-lg"> Pre Time:{props.preTime}</i>
            <i className="fa fa-clock-o fa-lg"> Cook Time:{props.cookTime}</i>
            <i className="fa fa-clock-o fa-lg"> Total Time:{props.totaltime}</i>
          </div>
          <Link to="/healthyrecipies/recipe" ><button></button></Link>
        </div>
      </div>

      </div>
      
    );
  }
export default Subcat;
