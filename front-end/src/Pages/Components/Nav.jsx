import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { IoFastFood } from 'react-icons/io5';
import { SiGnuprivacyguard } from 'react-icons/si';
import { useEffect } from 'react';
import './style/Nav.css'
import $ from 'jquery';


const Nav = () => {
  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent')
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {

    animation();
    $(window).on('resize', function () {
      setTimeout(function () { animation(); }, 500);
    });

  }, []);

  return (
    <>
    
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", height: '62px' }} className="navbar navbar-expand-lg navbar-mainbg">

        <Link className="navbar-brand navbar-logo" to="/" exact>
          Hew-Hew
        </Link>

        <div style={{ display: 'flex', width: '35%' }}>
          <button
            className="navbar-toggler"
            onClick={function () {
              setTimeout(function () { animation(); });
            }}
            type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars text-white"></i>
          </button>

          <div
            className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">

              <div className="hori-selector">
                <div className="left"></div>
                <div className="right"></div>
              </div>

              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>




              <li className="nav-item active" >

                <Link to="/" exact style={{ display: 'flex', alignItems: "center" }}>
                  <i
                    className="fas fa-tachometer-alt" >
                    <AiFillHome />
                  </i>
                  <h2>Home</h2>
                </Link>
              </li>


              <li className="nav-item" >
                <Link to="/service" exact style={{ display: 'flex', alignItems: "center" }}>
                  <i
                    className="far fa-clone">
                    <IoFastFood />
                  </i>
                  <h2> Services</h2>
                </Link>
              </li>

              <li className="nav-item" >
                <Link to="/service" exact style={{ display: 'flex', alignItems: "center" }}>
                  <i
                    className="far fa-clone">
                    <IoFastFood />
                  </i>
                  <h2>Profile</h2>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/login" exact style={{ display: 'flex', alignItems: "center" }}>
                  <i
                    className="far fa-copy">
                    <SiGnuprivacyguard />
                  </i>
                  <h2>Log In</h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
export default Nav

