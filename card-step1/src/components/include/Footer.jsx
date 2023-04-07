import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  width: 100%;
  background-color: #d5b4b4;
  text-align: center;
`;
const TitleP = styled.p`
  color: balck;
`;
const Footer = () => {
  return (
    <FooterDiv>
      <TitleP>너 납치된거야</TitleP>
    </FooterDiv>
  );
};

export default Footer;
