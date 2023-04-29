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
    <div className="d-flex flex-column align-items-center justify-content-center  w-100 bgHome">
      <div>
        <div className="head-text ">
          <div class='text-on-image '>
            <i><p>Hew-Hew</p></i>
          </div>
          <div className="head-image">
            <img className="picture" src="https://i.pinimg.com/originals/59/b5/19/59b519204588defc11c64853504644c1.jpg" alt="hew" />
          </div>

        </div>
      </div>





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
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted">© 2022 WebdevProject</p>

          <a href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <svg class="bi me-2" width="800" height="100">

            </svg>
          </a>

        </footer>
        <p class="text-center"><a href="#" class="link-dark">Back to top</a></p>
      </div>
    </div>



  );
}

export default Home;
