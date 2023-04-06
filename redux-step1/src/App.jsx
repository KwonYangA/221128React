import { useState } from "react";
import "./App.css";
import Footer from "./components/include/Footer";
import Header from "./components/include/Header";
import MainPage from "./components/page/MainPage";

function App() {
  const num = 0; //리렌더링은 없음
  const [number, setNumber] = useState(0) // 상태 변경을 위해서
  const addNumber = () =>{
    setNumber(number+1)
  }
  return(
  <>
  <div className="container">
    <Header number={number} />
    <MainPage number={number} addNumber={addNumber} />
    <Footer addNumber={addNumber} />
    <button onClick={addNumber}>추가</button>
  </div>
  </>
  )
}

export default App;
