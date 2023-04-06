import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ReduxHomePage from "./components/page/ReduxHomePage";

const ReduxApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact={true} element={<ReduxHomePage />} />
      </Routes>
    </>
  );
};

export default ReduxApp;
