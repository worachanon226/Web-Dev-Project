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
      <div className="box">
        <div className="content">
          <Link to="Host">HOST</Link>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="box">
        <div className="content">
          <Link to="guest">JOIN</Link>
        </div>
      </div>
    </div>
   
      </div>
      </div>
      </div>

  );
}

export default Home;