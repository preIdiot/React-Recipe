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
          <div className="card" style={styles}> 
            <Link to="/"><img src={props.imgscr} alt="myPic" className="card_img" /></Link>
            <div className="card_info">
              <span className="card_category">{props.title}</span>
              <h3 className="card_title">{props.sname}</h3>
            </div>
          </div>
        </div>
        </Router>
      </>
    );
  }
export default Cards