import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./index.css";
import UserProvider from "./userContext";
// import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
      crossOrigin="anonymous"
    ></link>
    {/* <CookiesProvider> */}
      <UserProvider>
        <App />
      </UserProvider>
    {/* </CookiesProvider> */}
  </React.StrictMode>
);