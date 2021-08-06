import React from 'react';
import '../css/style.css';
import { Link } from 'react-router-dom';

function Subcat(props) {
  console.log(props);
    return (
      <div>
        <div className="card gallery__item">
        <img src="media/healthyRecipies/Chilli Oil Avocado Salad.jpg" className="gallery__img" alt="Image 1"/>
        <div className="card-body">
          <h6 className="card-title gallery_font">Chilli Oil Avocado Salad</h6>
          <hr/>
          <div className="fstyle">
            <i className="fa fa-cutlery fa-lg"> Recipe Servings: 2</i>
            <i className="fa fa-clock-o fa-lg"> Pre Time:10 min</i>
            <i className="fa fa-clock-o fa-lg"> Cook Time:15 min</i>
            <i className="fa fa-clock-o fa-lg"> Total Time:25 min</i>
          </div>
        </div>
      </div>

      </div>
      
    );
  }
export default Subcat ;