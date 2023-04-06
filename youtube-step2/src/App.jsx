import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import VideoList from "./components/VideoList";
import YoutubePage from "./components/page/YoutubePage";

const App = () => {
  console.log("App");
  const [videos, setVideos] = useState([]);
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
    return () => {
      console.log("return 안");
    };
  }, []); // 상택훅이 변경되면 그 때마다 자동호출 됨
  console.log(videos);
  return (
    <>
      <YoutubePage videos={videos} />
    </>
  );
};

export default App;
/* 
리덕스 설정 - index.js에서 처리한다
:Provider store 설정 - reducer 읽기 - dispatch  
App.jsx에서는 라우트 처리를 한다. - 화면전환

*/
