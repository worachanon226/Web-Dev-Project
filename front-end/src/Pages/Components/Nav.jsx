import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { IoFastFood } from "react-icons/io5";
import { SiGnuprivacyguard } from "react-icons/si";
import { useEffect } from "react";
import "./style/Nav.css";
import $ from "jquery";
import { useUserContext } from "../../userContext";

const Nav = () => {
  let { user, setUser } = useUserContext();
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "ul li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("load", function () {
      setTimeout(function () {
        animation();
      }, 100);
    });
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 100);
    });
  }, []);

  let set1 = () => {
    return (
      <>
        <li className="nav-item  active">
          <Link className="nav-link d-flex" to="/">
            <i className="fas fa-tachometer-al m-1">
              <AiFillHome />
            </i>
            <h5 className="text-center">Home</h5>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link d-flex" to="/service">
            <i className="far fa-tachometer-alt m-1">
              <IoFastFood />
            </i>
            <h5 className="text-center">Services</h5>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link d-flex" to="/profile">
            <i className="far fa-clone m-1">
              <IoFastFood />
            </i>
            <h5 className="text-center">Profile</h5>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            onClick={() => {
              setUser(undefined);
            }}
            className="nav-link d-flex"
            to="/login"
          >
            <i className="fas far fa-chart-bar m-1">
              <SiGnuprivacyguard />
            </i>
            <h5 className="text-center">Log Out</h5>
          </Link>
        </li>
      </>
    );
  };
  let set2 = () => {
    return (
      <>
        <li className="nav-item  active">
          <Link className="nav-link d-flex" to="/">
            <i className="fas fa-tachometer-al m-1">
              <AiFillHome />
            </i>
            <h5 className="text-center">Home</h5>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link d-flex" to="/login">
            <i className="fas far fa-chart-bar m-1">
              <SiGnuprivacyguard />
            </i>
            <h5 className="text-center">Sign In</h5>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link d-flex" to="/signup">
            <i className="fas far fa-chart-bar m-1">
              <SiGnuprivacyguard />
            </i>
            <h5 className="text-center">Sign Up</h5>
          </Link>
        </li>
      </>
    );
  };
  return (
    <>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"
      ></script>

      <nav className="navbar navbar-expand-lg navbar-mainbg">
        <Link className="text" to="/" exact>
          Hew-Hew
        </Link>

        <button
          className="navbar-toggler collapsed border-0"
          onClick={function () {
            setTimeout(function () {
              animation();
            }, 1);
          }}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <ul className="navbar-nav ml-auto">{user ? set1() : set2()}</ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default Nav;
