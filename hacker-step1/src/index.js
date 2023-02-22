import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HackerApp from "./HackerApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    {/*     <App /> */}
    <HackerApp />
  </React.Fragment>
);

/* 
HackerNews 데이터를 axios가져올 때 React.StrictMode가 있으면
두번 요청이 발생함
빈태그로 변경함
여기서 빈태그는 Fragement을 의미한다.
*/
