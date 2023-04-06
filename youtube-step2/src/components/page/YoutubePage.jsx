import axios from "axios";
import React, { useEffect, useState } from "react";
import VideoList from "../VideoList";
import { Button, Form, InputGroup } from "react-bootstrap";
import VideoDetail from "../VideoDetail";

//기능 추가 - 사용자가 입력한 키워드 관리
//1 검색기 추가
//2 비디오 선택시 상세페이지
const YoutubePage = () => {
  //사용자가 입력한 키워드 관리
  const [keyword, setKeyword] = useState("");
  //상세화면 추가로 인한 훅 필요
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  //비디오가 선택되면 상태값을 관리함
  const videoSelect = (video) => {
    setSelectedVideo(video);
  };
  const [params, setParams] = useState({
    part: "snippet",
    chart: "mostPopular",
    maxResults: 25,
    key: "AIzaSyD9MSXw9K6XTYU_r_pCkRBnkFL674sMFmY",
  });
  useEffect(() => {
    console.log("App안에 useEffect");
    axios
      .get("https://youtube.googleapis.com/youtube/v3/videos?", { params })
      .then((result) => {
        console.log(result.data.items);
        setVideos(result.data.items);
      })
      .catch((error) => console.log(error));
  }, [params]); // 상택훅이 변경되면 그 때마다 자동호출 됨

  const youtubeSearch = () => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=AIzaSyD9MSXw9K6XTYU_r_pCkRBnkFL674sMFmY`
      )
      .then((result) => {
        console.log(result.data.items);
        setVideos(result.data.items);
        setSelectedVideo(null);
      })
      .catch((error) => console.log(error));
  }; // 상택훅이 변경되면 그 때마다 자동호출 됨

  const changeKeyword = (event) => {
    console.log(event.target.value);
    setKeyword(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div>
          <h1>
            YouTube<small>유튜브</small>
          </h1>
          <hr />
        </div>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search..."
            aria-label="Search..."
            aria-describedby="basic-addon2"
            onChange={changeKeyword}
            onKeyDown={youtubeSearch}
          />
          <Button className="btn btn-danger" onClick={youtubeSearch}>
            Search
          </Button>
        </InputGroup>
        {selectedVideo && (
          <div>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <VideoList videos={videos} videoSelect={videoSelect} />
      </div>
    </>
  );
};

export default YoutubePage;
