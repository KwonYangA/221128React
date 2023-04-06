import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import VideoList from "./components/VideoList";

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
      <VideoList videos={videos} />
    </>
  );
};

export default App;
