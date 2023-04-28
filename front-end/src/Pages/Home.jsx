import { Link } from "react-router-dom";
import React from "react";
import "./style/Home.css";
import { useEffect } from "react";
import $ from "jquery";
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  useEffect(() => {
    $('#homeBtn').trigger('click');
  }, [location]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center  w-100 bgHome">
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
