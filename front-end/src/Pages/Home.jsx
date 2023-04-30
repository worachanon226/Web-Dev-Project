import { Link } from "react-router-dom";
import React from "react";
import "./style/Home.css";
import { useEffect } from "react";
import $ from "jquery";
import { useLocation } from 'react-router-dom';
import ReactDOM from "react-dom";

function Home() {
  const location = useLocation();
  useEffect(() => {
    $('#homeBtn').trigger('click');
  }, [location]);



  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-fit bgHome">
      <div className="section h-fit">
        
        <div className="home">
          <div className="home-text">
            <h1>Hew-Hew</h1>
            <h2>Food The  Most Precious Things</h2>
            <div className="d-flex flex-row gap-5">
              <Link className="text-decoration-none" to="Host">
                <div className="btnhome">
                    <h4 className="m-1">HOST</h4>
                </div>
              </Link>
              <Link className="text-decoration-none" to="Guest ">
                <div className="btnhome">
                    <h4 className="m-1" >JOIN</h4>
                </div>
              </Link>
            </div>
          </div>
          <div className="home-img ">
            <img className="picture" src="Hew-img.png" alt="hew" />
          </div>
        </div>
      </div>

      
    </div>



  );
}

export default Home;
