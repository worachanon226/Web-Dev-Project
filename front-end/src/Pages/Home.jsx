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
      <div class="section">
        <div class="home">
          <div class="home-text">
            <h1>Hew-Hew</h1>
            <h2>Food The  Most Precious Things</h2>
            <div class="d-flex flex-row gap-5"> 
              <Link to="Guest ">
                <div className="btnhome">
                  <div className="content">
                    <h4>JOIN</h4>
                  </div>
                </div>
              </Link>
              <Link to="Host">
                <div className="btnhome">
                  <div className="content">
                    <h4>HOST</h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div class="home-img ">
            <img className="picture" src="https://th.bing.com/th/id/R.a959ce9211765aae57111ea75a1d8ba2?rik=b7c4VlFKhP24PQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftransparent-food-clipart%2ftransparent-food-clipart-10.png&ehk=h6J2VFGpq1VH%2fLgtQ%2fAbt2LWfl1Sz2bORmWjqD9s8dM%3d&risl=&pid=ImgRaw&r=0" alt="hew" />
          </div>
        </div>
      </div>
      
      <div class="container">
        <footer class="d-flex  align-items-center justify-content-center align-items-center py-3 my-4 border-top">
          <a href="/"
            class=" d-flex align-items-center justify-content-center ">
            <svg class="bi me-2" width="800" height="100">

            </svg>
          </a>
        </footer>

      </div>
    </div>



  );
}

export default Home;
