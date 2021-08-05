import React from 'react';
import '../css/style.css';
import { Link ,BrowserRouter  as Router} from 'react-router-dom';

function Cards(props) {
    const styles={
        width:"18rem"
    }
    
  console.log(props);
    return (
      <>
      <Router>
        <div className="cards">          
          <div className="card">
                <img
                  src={props.imgscr}
                  className="card-img-top"
                  alt={props.title}
                />
                <div className="card-body headstyle">
                  <h4 className="card-title">{props.title}</h4>
                  <p className="card-text">
                    {props.info}
                  </p>
                  <a href="#" className="btn btn-success">Know more</a>
                </div>
              </div>
        </div>
        </Router>
      </>
    );
  }
export default Cards