import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import CardManager from "./components/page/CardManager";
import styled from "styled-components";

const AppDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-item: center;
  background-color: #e8e7e6;
`;

const App = () => {
  return (
    <>
      <AppDiv>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/manager" element={<CardManager />} />
        </Routes>
      </AppDiv>
    </>
  );
};

export default App;
