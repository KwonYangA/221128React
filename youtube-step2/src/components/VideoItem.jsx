import React from "react";
import styled from "styled-components";

const VideoLi = styled.li`
  padding: 0.2em;
  list-style: none;
`;
const VideoThumbnail = styled.img`
  width: 40%;
  height: 100%;
`;
const VideoCard = styled.div`
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
const Ptitle = styled.p`
  margin: 10;
  font-size: 0.8rem;
  color: darkred;
  font-weight: bold;
`;

const Pchannel = styled.p`
  margin: 20;
  font-size: 0.5rem;
`;

const VideoInfo = styled.div`
  margin: 0.5em;
`;

const VideoItem = (props) => {
  //console.log(props)
  //첫번째 파라마미터 비디오 한 건에 대한 정보
  //두번째 파라미터는 선택된 비디오의 이벤트 처리 함수의 주소번지를
  //받아서 VideoLi가 클릭되었을 때 파라미터로 video한 건의 주소번지를 담아서
  //부모에서 정의된 이벤트 처리 함수를 호출한다
  //VideoList에서 이벤트 처리를 마무리 하지 않고 props로 넘기는 이유가 뭔가요?
  //VideoList에서는 n건을 가지고 있고 이 중에서 어떤 비디오 클릭이 선택되었는지 알 수 없으니까...
  //이벤트 소스클립은 리스트에 있지만 선택된 비디오 한건에 대한 정보는 VideoItem에서 결정된다.
  //그러니까 비디오 한건에 대한 정확한 정보를 알고 있는 자손 컴포넌트인 VideoItem에서 
  //부모가 가진 함수의 주소번지를 props로 받고 이벤트 호출은 VideoItem에서 처리해야한다.
  const {video, videoSelect} = props

  return (
    <VideoLi onClick={()=> videoSelect(video)}>
      <VideoCard>
        <VideoThumbnail
          src={props.video.snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <VideoInfo>
          <Ptitle>{props.video.snippet.title}</Ptitle>
          <Pchannel>{props.video.snippet.channelTitle}</Pchannel>
        </VideoInfo>
      </VideoCard>
    </VideoLi>
  );
};

export default VideoItem;
