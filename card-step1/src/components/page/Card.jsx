import React from "react";
import styled from "styled-components";
import styles from "./card.module.css";

const CardLi = styled.li`
  display: flex; /* 이름 같은 것들 이미지 옆으로 보내기 */
  width: 100%; /* flex속성일 때 사용할 수 있는 속성임 */
  background-color: yellow;
  margin-bottom: 0.5em;
  border-radius: 1em;
  padding: 0.2em 0;
  box-shadow: 6px 6px 8px 0px rgba(217, 217, 217, 1);
  max-width: 30em;/* 너비가 넓어질 수 있는 제약 줌 */
`;
const AvatarImg = styled.img`
  width: 10em;
  height: 10em;
  padding: 1em; //이미지 안쪽 여백주기
  border-radius: 50%;
  list-style: none;
  margin-right: 1em;
  margin-left: 0.5em;
`;

const NameH1 = styled.h1`
  margin: 0;
  font-size: 1.2rem;
  margin-bottom: 0.2em;
`;
const CompanyP = styled.p`
  margin: 0;
  font-size: 1rem;
  margin-bottom: 1em;
`;
const TitleP = styled.p`
  margin: 0;
  font-size: 0.8rem;
  margin-bottom: 1em;
`;
const EmailP = styled.p`
  margin: 0;
  font-size: 0.8rem;
  margin-bottom: 1em;
`;
const MessageP = styled.p`
  margin: 0;
  font-size: 0.8rem;
  margin-bottom: 1em;
`;

const Card = ({ card }) => {
  const DEFAULT_IMAGE = "/images/잘생겼다.jpg";
  const { name, company, title, email, message, theme } = card;
  const getStyles = (theme) => {
    switch (theme) {
      case "dark":
        return styles.dark;
      case "light":
        return styles.light;
      case "colorful":
        return styles.colorful;
      default:
        throw new Error("unknown theme:${theme}");
    }
  };
  return (
    <CardLi className={`${styles.card} ${getStyles(theme)}`}>
      <AvatarImg src={DEFAULT_IMAGE} alt="profile image" />
      <div className={{ width: "100%" }}>
        <NameH1>{name}</NameH1>
        <CompanyP>{company}</CompanyP>
        <TitleP>{title}</TitleP>
        <EmailP>{email}</EmailP>
        <MessageP>{message}</MessageP>
      </div>
    </CardLi>
  );
};

export default Card;
