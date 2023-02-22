import axios from "axios";
import { useEffect, useState } from "react";
import HackerNews from "./components/HackerNews";
const HackerApp = () => {
  const [newsList,setNewsList] = useState([]);
  const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
  useEffect(()=>{
    axios.get(NEWS_URL).then(response => {
      console.log(response.data);
      //6번에서 선언한 useState 훅에 데이터 초기화함
      setNewsList(response.data);
      console.log(newsList);
    })
  },[])
  return (
    <HackerNews newsList={newsList}/>
   );
}
export default HackerApp;
