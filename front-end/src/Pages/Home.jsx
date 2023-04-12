import React from "react";
import { Link } from "react-router-dom";
function Home() {
  let linkStyle = {
    height:"40%",
    width: "30%",
    textAlign: "center",
    background:"red",
    padding:"100px 0"
  };
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
        <Link style={linkStyle} to="host">
          HOST
        </Link>
        <Link style={linkStyle} to="guest">
          JOIN
        </Link>
      </div>
    </div>
  );
}

export default Home;
