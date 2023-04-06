import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import "./index.css";
import ReduxApp from "./ReduxApp";
import firebaseApp from "./service/firebase";
import AuthLogic from "./service/authLogic";
import { setAuth } from "./redux/userAuth/action";
import { BrowserRouter } from "react-router-dom";
import ReduxHomePage from "./components/page/ReduxHomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
//리덕스 적용하기
//AuthLogic 객체 생성하기
const authLogic = new AuthLogic(firebaseApp);
//store에 있는 초기 상태 정보 출력
const store = legacy_createStore(rootReducer);
store.dispatch(
  setAuth(authLogic.getUserAuth(), authLogic.getGoogleAuthProvider())
);
console.log(store.getState());
root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <ReduxApp/>
      </Provider>
    </BrowserRouter>
  </>
);
