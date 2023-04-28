import { Link } from "react-router-dom";
import React from "react";
import "./style/Home.css";

function Home() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100 w-100 bgHome">
    <div className="d-flex flex-row justify-content-between h-50 w-100">
        <div className="container">
          <div className="card">
            <Link to="Host">
              <div className="box1">
                <div className="content">
                  <h4>HOST</h4>
                </div>
              </div>
            </Link>
          </div>

          <div className="card">
            <Link to="Guest">
              <div className="box2">
                <div className="content">
                  <h4>JOIN</h4>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
