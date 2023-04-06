import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import UseStateApp1 from "./components/1.useState/UseStateApp1";
import UseStateApp5 from "./components/2.useState/UseStateApp5";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseStateApp1 /> */}
    <UseStateApp5 />
  </React.StrictMode>
);
