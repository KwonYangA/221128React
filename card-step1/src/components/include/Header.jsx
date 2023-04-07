import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../../service/authLogic";

const HeaderDiv = styled.div`
  width: 100%;
  text-align: center;
  background-color: #e4d0d0;
  padding: 0.5em;
  position: relative;
`;
const Img = styled.img`
  wigth: 3em;
`;
const BtnLogout = styled.button`
  position: absolute;
  right: 3em;
  top: 1em;
  padding: 0.8em;
  border-radius: 8%;
  background-color: #d5b4b4;
  color: #867070;
  outline: 0;
  border: 0;
  cursor: pointer;
  font-weight: bolder;
`;
const TitleH1 = styled.h1``;

const Header = () => {
  const navigate = useNavigate();
  const { userAuth } = useSelector((store) => store);
  const [userId, setUserId] = useState();
  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
  }, []);
  const onLogout = () => {
    console.log("onLogout");
    logout(userAuth.auth);
    navigate("/");
    window.location.reload();
  };

  return (
    <HeaderDiv>
      {userId && <BtnLogout onClick={onLogout}>Logout</BtnLogout>}
      <Img src="/images/손석구.png" alt="logo" />
      <TitleH1>Name Card</TitleH1>
    </HeaderDiv>
  );
};
export default Header;
