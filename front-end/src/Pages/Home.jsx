import React from "react";
import './style/Home.css'
import { Link } from "react-router-dom";


function Home() {
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          height:"60%",
          width: "100%",
        }}
      >
       
    <div className="container">
    <div className="card">
      <Link to="Host"><div className="box1">
        <div className="content">
          <h5>HOST</h5>
        </div>
      </div></Link>
    </div>

    <div className="card">
    <Link to="Host"><div className="box2">
        <div className="content">
        <h5>JOIN</h5>
        </div>
      </div></Link>
    </div>
   
      </div>
      </div>
      </div>

  );
}

export default Home;