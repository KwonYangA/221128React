import React from "react";
import VideoItem from "./VideoItem";
import styled from "styled-components";

const UL = styled.ul`
  display; flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  magin: 0;
`;

const VideoList = ({ videos }) => {
  console.log(videos);
  return (
      <UL>
        {videos.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </UL>
  );
};

export default VideoList;
