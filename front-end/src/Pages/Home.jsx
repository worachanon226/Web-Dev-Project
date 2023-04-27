import { Link } from "react-router-dom";
import React from "react";
import './style/Home.css'


function Home() {
  
  return (
    <div className="d-flex flex-column align-center-center justify-content-center w-100 h-100">
      <div className="d-flex flex-row justiify-content-between h-75 w-100">
       
    <div className="container">
    <div className="card">
      <Link to="Host"><div className="box1">
        <div className="content">
          <h4>HOST</h4>
        </div>
      </div></Link>
    </div>

    <div className="card">
    <Link to="Guest"><div className="box2">
        <div className="content">
        <h4>JOIN</h4>
        </div>
      </div></Link>
    </div>
   
      </div>
      </div>
      </div>

  );
}

export default Home;