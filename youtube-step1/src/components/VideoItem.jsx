import React from "react";
import styled from "styled-components";

const LI = styled.li`
  border-style: solid;
  width: 50%;
  padding: 0.2em;
`;

const IMG = styled.img`
  width: 40%;
  height: 100%;
`;
const VIDEODIV = styled.div`
  width: 100%;
  height: 100%;
  display: flex; /* 비디오가 한줄에 나오게 함 */
  aligin-item: center;
  border: 1px solid lightgray;
  box-shadow: 3px 3px 5px 0px rgba(191, 191, 191, 0.55); /* 그림자효과 */
  cusor: pointer;
  transition: transform 250ms easy-in; /* 자연스럽게 처리 */
  &:hover {
    transform: scale(1.02);
  }
`;

const PTITLE = styled.p`
  margin: 10;
  font-size: 1rem;
  color: darkred;
  font-weight: bold;
`;

const CHTITLE = styled.p`
  margin: 20;
  font-size: 0.8rem;
`;

const DIV = styled.div`
  margin-left: 0.3em;
`;

const VideoItem = (props) => {
  return (
    <LI>
      <VIDEODIV>
          <IMG
            src={props.video.snippet.thumbnails.medium.url}
            alt="video thumbnail"
            />
          <DIV>
            <PTITLE>{props.video.snippet.title}</PTITLE>
            <CHTITLE>{props.video.snippet.channelTitle}</CHTITLE>
          </DIV>
      </VIDEODIV>
    </LI>
  );
};

export default VideoItem;
