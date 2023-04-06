import React from "react";
import VideoItem from "./VideoItem";
import styled from "styled-components";

const VideoListDvi = styled.div`
  display: grid;
  magin-top: 10px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`;

const VideoList = ({ videos, videoSelect }) => {
  console.log(videos);
  return (
    <>
      <VideoListDvi>
        {videos.map((video, index) => (
          <VideoItem key={index} video={video} videoSelect={videoSelect} />
        ))}
      </VideoListDvi>
    </>
  );
};

export default VideoList;
